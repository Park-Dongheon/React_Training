import { useEffect, useState, useRef } from "react";
import TailInput from "../UI/TailInput";
import ButtonC from "../UI/Button";

/*
1. 상태 관리 및 참조 변수 설정
2. 데이터 가져오기 (GET)
3. 데이터 추가 (POST)
4. 데이터 수정 (PUT)
5. 데이터 삭제 (DELETE)
6. 렌더링 및 이벤트 처리
*/
export default function Rest() {
  const [tdata, setTdata] = useState([]);                   // 게시물 목록
  const [tags, setTags] = useState();                       // 테이블 행
  const [isUdate, setIsUpdate] = useState(false);           // 수정 모드 여부
  const [isUdateId, setIsUpdateId] = useState();            // 수정 중인 게시물의 ID

  const txt1Ref = useRef();                                 // 제목 입력 필드 참조
  const txt2Ref = useRef();                                 // 작성자 입력 필드 참조

  // 데이터 삭제(DELETE), 지정된 id의 게시물을 JSON 서버에서 삭제
  const jsonDelete = async (id) => {
    console.log(id)
    let url = `http://localhost:3005/posts/${id}`;
    await fetch(url, {
      method: 'DELETE'
    });
    setTdata(tdata.filter(item => item.id !== id))
  };

  // 데이터 수정(PUT) 
  // ①수정 모드 진입 - 수정 클릭 시 입력 필드에 기존 값을 설정, 수정 모드로 전환
  const jsonUpdate = async (item) => {
    console.log("item", item)

    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;
    setIsUpdate(true);
    setIsUpdateId(item.id);
  };

  // ②수정 요청 보내기 - 수정 버튼 클릭 시 서버에 PUT 요청 보냄, 성공 시 tdata 상태를 갱신
  const jsonUpdate2 = async () => {
    console.log("jsonUpdate2", jsonUpdate2)
    console.log("isUdateId", isUdateId)

    const putData = {
      id: isUdateId,
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    }

    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요.");
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    let url = `http://localhost:3005/posts/${isUdateId}`;
    const resp = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(putData),
    });
    const data = await resp.json();
    console.log(data)
    setTdata(tdata.map(item => item.id === isUdateId ? data : item));
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
    setIsUpdate(false);
    setIsUpdateId("");
  };

  // 데이터 추가(POST), JSON 서버에 POST요청, 성공 시 tdata 상태를 갱신
  const jsonPost = async () => {
    console.log('post');

    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요.");
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    let url = "http://localhost:3005/posts";
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    const data = await resp.json();
    console.log(data)
    setTdata([...tdata, data]);
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
  };

  const handleOk = () => {
    if (isUdate) jsonUpdate2();
    else jsonPost();
  };

  // 데이터 가져오기(GET)
  const getFatchData = async (url) => {
    // await : fetch가 끝날때 까지 기다림
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data)
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => setTdata(data))
    //     .catch(err => console.log(err))
  };

  // 컴포넌트 생성시, 초기 설정과 데이터 불러오기 json-server에서 db.json파일 내용을 로컬로 로컬 url 형태로 
  useEffect(() => {
    let url = "http://localhost:3005/posts";
    getFatchData(url);
  }, []);

  // 데이터 렌더링, tdata 상태가 변경될 때마다 테이블 행을 생성
  useEffect(() => {
    if (!tdata) return;
    console.log("tdata", tdata)

    let tm = tdata.map(item => <tr key={item.id}
      className="h-10 border-b border-emerald-200 
                                            hover:bg-emerald-100 text-center font-bold">
      <td className="px-6 py-3">
        {item.title}
      </td>
      <td className="px-6 py-3">
        {item.author}
      </td>
      <td className="px-6 py-3 text-center">
        <a href="#" className="inline-flex p-2 rounded-md
                                                         hover:bg-emerald-500 hover:text-slate-100"
          onClick={() => jsonDelete(item.id)}>
          [삭제]
        </a>
      </td>
      <td className="px-6 py-3 text-center">
        <a href="#" className="inline-flex p-2 rounded-md
                                                         hover:bg-emerald-500 hover:text-slate-100"
          onClick={() => jsonUpdate(item)}>
          [수정]
        </a>
      </td>
    </tr>
    );
    setTags(tm)
  }, [tdata]);

  // 컴포넌트 UI
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 mb-5 bg-emerald-100
                        grid grid-cols-1 md:grid-cols-7 
                        text-center">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-2">
          <TailInput id="txt1"
            type="text"
            inRef={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex col-span-2 w-full">
          <TailInput id="txt2"
            type="text"
            inRef={txt2Ref} />
        </div>
        <div>
          <ButtonC caption={isUdate ? "수정" : "입력"}
            bcolor="blue"
            handleClick={handleOk} />
        </div>
      </div>
      <table className="w-11/12 bg-emerald-100
                          text-left text-sm text-surface font-light">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className='bg-emerald-600 text-emerald-200 text-center font-bold'>
            <th scope="col" className="px-6 py-3">제목</th>
            <th scope="col" className="px-6 py-3">작성자</th>
            <th scope="col" className="px-6 py-3">삭제</th>
            <th scope="col" className="px-6 py-3">편집</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}