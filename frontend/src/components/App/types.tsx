import { RouteComponentProps } from 'react-router';

interface MatchParams {
    client: string;
}

export interface Props extends RouteComponentProps<MatchParams> {}
