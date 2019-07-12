type Data = { r: number, x: number, y: number, value: number, label: string }

export type Props = {
    data: Array<Data>
    size: Array<number>
}
export type State = {
    width: number
    height: number
    data: Array<Data>
}