import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import userimg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

export default function Dashboard() {
  return (
    <div className="admin_container">
      <AdminSideBar />
      <main className="dashboard">
        {/* Search Bar */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userimg} alt="" />
        </div>
        {/* States */}
        <section className="widget_container">
          <WidgetItem
            percent={50}
            amount={true}
            value={4000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            amount={false}
            value={23000}
            heading="Transaction"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={1000}
            heading="Products"
            color="rgb(75,0,255)"
          />
        </section>

        {/* Graphs */}

        <section className="graph_container">
          <div className="revenue_chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 225, 433, 655, 247, 320]}
              data_2={[400, 344, 330, 133, 255, 347, 255]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,215)"
              bgColor_2="rgba(53,162,235,0.8)"
              // horizontal={true} 
            />
          </div>
          {/* Rightside invendory */}
          <div className="dashboard_categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((v) => (
                <CategoryItem
                  key={v.heading}
                  heading={v.heading}
                  value={v.value}
                  color={`hsl(${v.value * 4},${v.value}%, 50% )`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction_container">
          <div className="gender_chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)" ,"rgba(53,162,235,0.8)"]}
              cutOut={90}    
            />  
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/* Table */}

          <DashboardTable data={data.transaction}/>
          
        </section>
      </main>
    </div>
  );
}

interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent} %{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent} %{" "}
        </span>
      )}
    </div>

    <div
      className="widget_cicrle"
      style={{
        background: `conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg,
      rgb(255,255,255) 0
    )`,
      }}
    >
      <span style={{ color: color }}> {percent}%</span>
    </div>
  </article>
);

interface categoryitemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: categoryitemProps) => (
  <div className="category_item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);
