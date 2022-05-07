import { Alert } from "react-bootstrap";

export default function MessageBox(props) {
  return <Alert varient={props.varient || "info"}>{props.children}</Alert>;
}
