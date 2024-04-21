import AdminSideBar from "../../components/AdminSideBar";
import { BarChart } from "../../components/Chart";

export default function BarCharts() {
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
        <h1>Bar Chart</h1>
        <section>
          <BarChart
            data_1={[12, 20, 18]}
            data_2={[10, 15, 25]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top selling products & top custumers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[12, 20, 18,23,4,56,78,5,6,45,32,34]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180,40%,50%)`}
            bgColor_2={``}
            labels={months}
          />
          <h2>Top selling products & top custumers</h2>
        </section>
      </main>
    </div>
  );
}
