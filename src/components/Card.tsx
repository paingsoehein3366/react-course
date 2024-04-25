interface prop {
      title: string,
      text: string,
      price: number,
      children: string
}
function Card({ title, text, price, children }: prop) {
      return (
            <section className="card">
                  <img src="https://via.placeholder.com/150/771796" />
                  <h1>{title}</h1>
                  <p>{text}</p>
                  <p>{price}</p>
                  {children}
            </section>
      )
};

export default Card;
