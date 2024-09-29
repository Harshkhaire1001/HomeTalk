import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import {listData} from "../../lib/dummydata.js";
function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item =>(
            <Card key = {item.id} item ={item}/>
          ))}
        </div>
      </div>
      <d iv className="mapContainer">
        
      </d>
    </div>
  );
}

export default ListPage;