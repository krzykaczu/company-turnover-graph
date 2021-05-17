import { Component, createRef, Dispatch, SetStateAction } from "react";
import * as d3 from "d3";

import { formatInPLN } from "../../utils/helpers";

export interface BubbleData {
  r: number;
  x: number;
  y: number;
  value: number;
  label: string;
}

export interface Props {
  data: BubbleData[];
  size: number[];
  hoveredCustomer: string;
  setHoveredCustomer: Dispatch<SetStateAction<string>>;
}

export class Bubble extends Component<Props> {
  private svgRef: React.RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);
    this.svgRef = createRef();
    this.drawBubble = this.drawBubble.bind(this);
  }
  componentDidMount(): void {
    this.drawBubble();
  }
  componentDidUpdate(): void {
    this.drawBubble();
  }
  drawBubble = (): void => {
    if (this.svgRef.current) {
      const svg = d3.select(this.svgRef.current);
      const { setHoveredCustomer, hoveredCustomer, size, data } = this.props;

      svg.select("g").remove();

      svg.style("transform-origin", "50% 50% 0");

      const circles = svg
        /* .call(zoom) */
        .append("g")
        .attr("class", "circles")
        .attr(
          "transform",
          `translate(${size[0] / 2},
          ${size[1] / 2})scale(0.21)`
        );

      const node = circles
        .selectAll(".node")
        .data(d3.packSiblings(data))
        .enter()
        .append("a")
        .attr("xlink:href", function (d) {
          return `/${d.label}`;
        })
        .attr("data-cy", "all-clients")
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
        .style("fill", function (d) {
          return d.label === hoveredCustomer ? "#f47560" : "#97e3d5";
        })
        .on("mouseenter", function () {
          d3.select(this).style("fill", "#f47560");
          const text = this.querySelector("text");
          setHoveredCustomer(text ? String(text.textContent) : "");
        })
        .on("mouseleave", function () {
          d3.select(this).style("fill", "#97e3d5");
          setHoveredCustomer("");
        });

      node.append("circle").attr("r", function (d) {
        return d.r;
      });

      node
        .append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function (d) {
          return d.label.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function (d) {
          return d.r / 5;
        })
        .attr("fill", "white");

      node
        .append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function (d) {
          return formatInPLN(d.value);
        })
        .attr("font-family", "Gill Sans")
        .attr("font-size", function (d) {
          return d.r / 5;
        })
        .attr("fill", "white");
    }
  };
  render(): JSX.Element {
    return (
      <div>
        <svg
          ref={this.svgRef}
          width={this.props.size[0]}
          height={this.props.size[1]}
        />
      </div>
    );
  }
}
