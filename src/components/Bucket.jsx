const Bucket = ({bucket}) => {

  function deleteData(id) {

    method: "DELETE", 
    `http://localhost:3000/bucket/${id}`,

    }


    console.log(bucket)

  return (
    <div>
      <ul>
      {bucket.map((item) => <li key={item.id}>{item.title}
        <button onClick={() => deleteData(item.id)}>delete</button>
      </li>)}
      </ul>
    </div>
  )
}

export default Bucket