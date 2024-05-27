import { useEffect, useState } from "react";


export default function Rest() {
  const [tdata, setTdata] = useState();
  const [tags, setTags] = useState();
  
  const getFatchData = async(url) => {
    // await으로 fetch가 끝날때 까지 기다림
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data)
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => setTdata(data))
    //     .catch(err => console.log(err))
  };

  // json-server에서 db.json파일 내용을 로컬로 로컬 url 형태로 
  useEffect(() => {
    let url = "http://localhost:3005/posts";

    getFatchData(url);
  }, []);

  useEffect(() => {
    if(!tdata) return;
    console.log("tdata", tdata)
    
    let tm = tdata.map(item => <tr key={item.id} 
                                   className="border-b border-emerald-200 
                                            hover:bg-emerald-100 text-center font-bold">
                                    <td className="px-6 py-3">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-3">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-3">
                                        {item.author}
                                    </td>
                               </tr>
    );
    setTags(tm)

  }, [tdata]);

  return (
    <div>
      <table className="w-12/12 bg-emerald-100
                        text-left text-sm text-surface font-light">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className='bg-emerald-600 text-emerald-200 text-center font-bold'>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">TITLE</th>
            <th scope="col" className="px-6 py-3">AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}
