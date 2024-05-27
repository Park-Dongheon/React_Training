export default function BoxOfficeTHead() {
  return (
  <thead
    className="border-b border-neutral-200 font-medium ">
    <tr className='bg-emerald-700 hover:bg-emerald-500 text-white'>
      <th scope="col" className="px-6 py-3">순위</th>
      <th scope="col" className="px-6 py-3">영화명</th>
      <th scope="col" className="px-6 py-3">매출액</th>
      <th scope="col" className="px-6 py-3">관객수</th>
      <th scope="col" className="px-6 py-3">증감율</th>
    </tr>
  </thead>
  )
}
