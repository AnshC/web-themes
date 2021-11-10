/** @jsxImportSource theme-ui */

export default function Heading (props) {
    const styles = {
        fontSize: props.fontSize || '65px',
        fontWeight: props.fontWeight || 900
    }
    return (
        <h1 sx={props.SX} className={props.styles} style={styles}>
            <span>{props.children}</span>
        </h1>
    )
}