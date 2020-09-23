import React from 'react';
import * as d3 from 'd3';

import { formatInPLN } from '../../utils/helpers';
import { Props, State } from './types';

export default class Bubble extends React.Component<Props, State> {
    private svgRef: React.RefObject<SVGSVGElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            width: this.props.size[0],
            height: this.props.size[1],
            data: this.props.data,
        };
        this.svgRef = React.createRef();
        this.drawBubble = this.drawBubble.bind(this);
    }
    componentDidMount() {
        this.drawBubble();
    }
    componentDidUpdate() {
        this.drawBubble();
    }
    drawBubble = () => {
        if (this.svgRef.current) {
            const svg = d3.select(this.svgRef.current);

            svg.select('g').remove();

            svg.style('transform-origin', '50% 50% 0');

            const zoom: any = d3
                .zoom()
                .scaleExtent([1, 30])
                .on('zoom', function () {
                    svg.attr('transform', d3.event.transform + `scale(${d3.event.transform.k})`);
                });

            const color = d3.scaleOrdinal(d3.schemeCategory10);

            const circles = svg
                .call(zoom)
                .append('g')
                .attr('class', 'circles')
                .attr(
                    'transform',
                    `translate(${this.state.width / 2},
          ${this.state.height / 2})scale(0.17)`,
                );

            const node = circles
                .selectAll('.node')
                .data(d3.packSiblings(this.state.data))
                .enter()
                .append('a')
                .attr('xlink:href', function (d) {
                    return `/${d.label}`;
                })
                .append('g')
                .attr('class', 'node')
                .attr('transform', function (d) {
                    return 'translate(' + d.x + ',' + d.y + ')';
                });

            node.append('title').text(function (d) {
                return d.label + ': ' + formatInPLN(d.value);
            });

            node.append('circle')
                .attr('r', function (d) {
                    return d.r;
                })
                .style('fill', function (d, i) {
                    return color(String(i));
                });

            node.append('text')
                .attr('dy', '.2em')
                .style('text-anchor', 'middle')
                .text(function (d) {
                    return d.label.substring(0, d.r / 3);
                })
                .attr('font-family', 'sans-serif')
                .attr('font-size', function (d) {
                    return d.r / 5;
                })
                .attr('fill', 'white');

            node.append('text')
                .attr('dy', '1.3em')
                .style('text-anchor', 'middle')
                .text(function (d) {
                    return formatInPLN(d.value);
                })
                .attr('font-family', 'Gill Sans')
                .attr('font-size', function (d) {
                    return d.r / 5;
                })
                .attr('fill', 'white');
        }
    };
    render() {
        return (
            <div>
                <svg ref={this.svgRef} width={this.props.size[0]} height={this.props.size[1]} />
            </div>
        );
    }
}
