import AdminSideBar from "../../components/AdminSideBar";
import { LineChart } from "../../components/Chart";

export default function LineCharts() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="admin_container">
      <AdminSideBar />
      <main className="chart_container">
        <h1>Line Chart</h1>
        <section>
          <LineChart
            data={[200, 151, 258, 125, 632, 142, 523, 423, 120, 536, 875, 123]}
            label="Users"
            labels={months}
            borderColor="rgb(53,162,255)"
            backgroundColor="rgb(53,162,255,0.5)"
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[24, 14,20, 12, 60, 14, 52, 40, 12, 53, 8, 12]}
            label="Products"
            labels={months}
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
          />
          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[24000, 14000,24100, 12500, 63020, 14200, 52300, 42300, 12000, 53006, 87500, 12300]}
            label="Revenue"
            labels={months}
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
          />
          <h2>Total Revenue </h2>
        </section>
        <section>
          <LineChart
            data={[9000, 1200,12000, 9000, 1020, 5200, 4000, 1200, 1100, 2106, 7500, 1200]}
            label="Discount"
            labels={months}
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
          />
          <h2>Discount Allotted </h2>
        </section>
      </main>
    </div>
  );
}
