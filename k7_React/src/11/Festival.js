import { useState, useEffect, useRef } from "react"
import TailSelect from '../UI/TailSelect';
import FestivalCard from './FestivalCard';

export default function Festival() {
  
    const [tdata, setTdata] = useState();       //부산 축제 정보
    const [ops, setOps] = useState();           //축제 구정보
    const [cards, setCards] = useState();
    const selRef = useRef() ;                   //옵션 선택

    // data fetch    
    const getFetchData = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log("fetch", data); 
            setTdata(data.getFestivalKr.item) 
        });
        
        console.log("getFetchData", url)
    };
    
    //구선택
    const handleGuSelect = (e) => {
        e.preventDefault();
        console.log(selRef.current.value);

        const selectedGu = selRef.current.value;
        if(selectedGu) {
            let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
                          .map(item => <FestivalCard key={item.UC_SEQ}
                                                     imgUrl={item.MAIN_IMG_NORMAL}
                                                     title={item.TITLE} 
                                                     content={item.ITEMCNTNTS} 
                                                     spTag={item.CNTCT_TEL}/>);

            console.log("tm", tm)
            setCards(tm)
        }
        
    };

    //컴포넌트 생성    
    useEffect(() => {
      let url = `http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
      url = url +  `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=37&resultType=json`;
  
      getFetchData(url) ;
    }, []);

    //데이터가 fetch 되었을때
    useEffect(() => {
        if (!tdata) return;
        console.log("tdata", tdata);
        let tm = tdata.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();   
        setOps(tm);
      }, [tdata]);

    
    return (
    <div className="w-full h-full 
                    flex flex-col justify-start items-start"> 
        <form className="w-full flex justify-center items-center">
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
                <label htmlFor="op" 
                       className="text-xl font-bold
                                  inline-flex 
                                  justify-start items-center 
                                text-emerald-900 dark:text-emerald-900">
                    부산 축제정보
                </label>
                {ops && <TailSelect id="op" 
                                    selRef={selRef}
                                    ops={ops}
                                    initText="---부산 지역구선택---"
                                    handleChange={handleGuSelect}/>}
            </div>
        </form>
        <div className="w-full grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3
                        gap-2">
            {tdata && cards}
        </div>
    </div>
    )
}
