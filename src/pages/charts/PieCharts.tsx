import AdminSideBar from "../../components/AdminSideBar";
import { DoughnutChart, PieChart } from "../../components/Chart";
import { categories } from "../../assets/data.json";
export default function PieCharts() {
  return (
    <div className="admin_container">
      <AdminSideBar />

      <main className="chart_container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 14]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[0, 0, 80]} //for space between border
            />
          </div>
          <h2>Order FullFillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%  ,50%)`
              )}
              offset={[0, 0,0, 90]} //for space between border
              legends={false}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["In Stock" , "Out Of Stock"]}
              data={[40,20]}
              backgroundColor={["hsl(269,80%,40%)" , "rgb(53,162,255)"]}
              offset={[0,80]} //for space between border
              legends={false}
              cutOut={"70%"}
            />
          </div>
          <h2>Stock Availabitiy</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Marketing Cost" , "Discount" , "Burnt" , "Production Cost" , "Net Margin"]}
              data={[32,18,5,20,25]}
              backgroundColor={["hsl(110,80%,40%)" , "hsl(19,80%,40%)","hsl(69,80%,40%)","hsl(300,80%,40%)" , "rgb(53,162,255)"]}
              offset={[20,30,20,30,80]} //for space between border
              legends={false}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 20)","Adult(20-40)", "Older(Above 40)"]}
              data={[12, 9, 14]}
              backgroundColor={[
                `hsl(10,${80}%,80%)`,
                `hsl(10,${80}%,50%)`,
                `hsl(10,${40}%,50%)`,
              ]}
              offset={[0, 0, 50]} //for space between border
            />
          </div>
          <h2>Users age group</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admin" , "Custumers"]}
              data={[40,250]}
              backgroundColor={[`hsl(335,100%,38%)` , `hsl(44,98%,50%)`]}
              offset={[0,80]} //for space between border
             
            />
          </div>
        </section>
      </main>
    </div>
  );
}
