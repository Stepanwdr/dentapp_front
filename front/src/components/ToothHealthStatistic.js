import React,{Component} from "react";
import { DonutChart } from "bizcharts";
import { Components } from "antd/lib/date-picker/generatePicker";
import connect from "react-redux";
const data = [
  {
    type: "1cat",
    value: 27,
  },
  {
    type: "2cat",
    value: 25,
  },
  {
    type: "3cat",
    value: 18,
  },
  {
    type: "4cat",
    value: 15,
  },
  {
    type: "5cat",
    value: 10,
  },
  {
    type: "6cat",
    value: 5,
  },
];

class ToothHealthStatistic extends Components {
render(){
  return (
    <DonutChart
      data={data || []}
      title={{
        visible: true,
        text: "Radial Chart",
      }}
      autoFit
      description={{
        visible: true,
        text: "Patient Tooth Health Chart",
      }}
			height={350}
      radius={0.8}
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 5 }}
    />
  );
}
}
const mapStateToProps=(state)=>({

});

const mapDispatchToProps={

};
const Container=connect(
    mapStateToProps,
    mapDispatchToProps
)(ToothHealthStatistic);

export default Container;

