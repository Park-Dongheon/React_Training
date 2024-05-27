import GalleryCard from "./GalleryCard"
import { useState, useEffect, useRef } from "react";
import ButtonC from "../UI/Button";

export default function Gallery() {
  //   const imgUrl = "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg";
  //   const title = '태종대유원지';
  //   const content = "부산광역시 영도구 동삼동"
  //   const spTag = "태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
  const [gData, setGData] = useState();
  const [cards, setCards] = useState();
  const inRef = useRef();

<<<<<<< HEAD
    //사용자 정의함수
    const handleOk = (e) => {
        e.preventDefault();
        console.log(inRef.current.value) ;
        if (inRef.current.value == '') {
          alert('키워드를 입력하세요.') ;
          inRef.current.focus();
          return ;
        }
  
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = url +  `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url +  `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url +  `&keyword=${encodeURI(inRef.current.value)}&_type=json`;
      
        getFetchData(url) ;
=======
  //사용자 정의함수
  const handleOk = (e) => {
    e.preventDefault();
    console.log(inRef.current.value);
    if (inRef.current.value === '') {
      alert('키워드를 입력하세요.');
      inRef.current.focus();
      return;
>>>>>>> 0a2d43a140833541dde315c4986e802be531175e
    }

  //데이터 초기화
  const handleClear = (e) => {
    e.preventDefault();
    setGData('');
    setCards('');
    inRef.current.value = '';
    inRef.current.focus();
  }

  const handleKeyCheck = (e) => {
    if (e.key === 'Enter') {
      console.log("엔터")
      handleOk(e);
    }
    else {
      console.log(e.key)
    }
  }

  // data Fetch
  const getFetchData = (url) => {
    fetch(url).then(resp => resp.json())
      .then(data => {
        console.log(data)
        setGData(data.response.body.items.item)
      })
      .catch(err => console.log(err))
  };

  // 컴포넌트 생성시
  useEffect(() => {
    // let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`;

    // console.log("url: ", url)
    // getFatchData(url)
  }, []);

  // gData가 만들어질때
  useEffect(() => {
    if (!gData) return;
    console.log("gData", gData)

    let tm = gData.map(item => <GalleryCard key={item.galContentId}
      imgUrl={item.galWebImageUrl}
      title={item.galTitle}
      content={item.galPhotographyLocation}
      spTag={item.galSearchKeyword} />)

    setCards(tm)

  }, [gData]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <form className="w-full flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
          <div className="flex justify-center items-center">
            <input type="text" id="txt1"
              ref={inRef}
              onKeyDown={handleKeyCheck}
              className="bg-gray-50 border
                          border-gray-300
                          text-gray-900 
                          text-sm 
                          rounded-lg
                          focus:ring-blue-500
                          focus:border-blue-500 
                          block w-full p-2.5" />
          </div>
          <div className="flex justify-evenly items-center">
            <ButtonC caption="확인"
              bcolor="blue"
              handleClick={handleOk} />
            <ButtonC caption="취소"
              bcolor="blue"
              handleClick={handleClear} />
          </div>
        </div>
      </form>
      <div className="w-full grid grid-cols-1 
                  md:grid-cols-2 lg:grid-cols-3 
                  gap-2">
        {cards}
      </div>
    </div>
  )
}
