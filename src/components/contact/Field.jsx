
function Field({children,error}) {
  return (
    <>
      {children}
      {!!error && <p className="text-xs text-red-600 font-normal mb-2 mt-1"> {error.message}</p>}
    </>
  )
}

export default Field