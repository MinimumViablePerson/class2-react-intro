const images = [
  'https://images.pexels.com/photos/12616283/pexels-photo-12616283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/4113831/pexels-photo-4113831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/12576758/pexels-photo-12576758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/10673160/pexels-photo-10673160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/12896240/pexels-photo-12896240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

function Images () {
  return (
    <div className='image-list'>
      {images.map(url => (
        <img src={url} className='image' />
      ))}
    </div>
  )
}

export default Images
