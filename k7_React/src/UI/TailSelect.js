export default function TailSelect({id, selRef, ops, initText, handleChange}) {
  const opTag = ops.map(item => <option key={item} value={item}>
                                  {item}
                                </option>);


  return (
    <select id={id}
            onChange={handleChange}
            ref={selRef}
            className='bg-emerald-50 border border-emerald-300
                       text-emerald-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500
                         block w-full p-2.5'>
      <option defaultValue={''}>
        {initText}
      </option>
      {opTag}
    </select>
  )
}
