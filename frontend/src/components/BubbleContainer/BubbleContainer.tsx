import React from 'react';
import { Query } from 'react-apollo';
import Bubble from '../Bubble';
import { Data, State, Props } from './types';
import { GET_CLIENTS_AND_TURNOVERS } from '../../gql_queries';
import Loader from '../loader';

const linearMappingOfBubblesR = (r: number): number => Math.sqrt(r);

const makeDataD3Ready = (data: { client: string; sumOfInvoices: number }) => {
    return {
        r: linearMappingOfBubblesR(data.sumOfInvoices),
        x: 0,
        y: 0,
        value: data.sumOfInvoices,
        label: data.client,
    };
};

export default class BubbleContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <Query<Data> query={GET_CLIENTS_AND_TURNOVERS}>
                {({ loading, error, data }) => {
                    if (loading) return <Loader />;
                    if (error) return `Error! ${error.message}`;

                    return (
                        /* data && (
                            <Bubble
                                data={data.turnoverByClients.map((client) => makeDataD3Ready(client))}
                                size={[this.state.width, this.state.height]}
                            />
                        ) */
                        <Loader />
                    );
                }}
            </Query>
        );
    }
}
