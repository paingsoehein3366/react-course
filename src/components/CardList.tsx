import Card from "./Card";

function CardList() {
      return (
            <main className="card-list">
                  <Card title="hell" text="ok" price={10} children={'Hi'} />
                  <Card title="hell" text="ok" price={10} children={'Hi'} />
                  <Card title="hell" text="ok" price={10} children={'Hi'} />
            </main>
      )
};

export default CardList;