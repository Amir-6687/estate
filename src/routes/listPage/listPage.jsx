import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../component/filter/Filter";
import Card from "../../component/card/Card";
import MapComponent from "../../component/map/Map";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <MapComponent items={data} />
      </div>
    </div>
  );
}

export default ListPage;
