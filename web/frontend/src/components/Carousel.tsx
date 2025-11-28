import { Link } from "react-router"

const Carousel = () => {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Burger" />
      </div>
      <div className="carousel-item ">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"

          />
        </a>

      </div>


      <div className="carousel-item ">

        <Link to={"/movies/26"}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger" />

        </Link>
      </div>


      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Burger" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt="Burger" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Burger" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Burger" />
      </div>
    </div >
  )
}

export default Carousel
