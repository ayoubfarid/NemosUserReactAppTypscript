import { Box } from "@mui/material";
import styles from "./TextLabelWithValue.module.css";
import TextRegularDisplay from "../TextRegularDisplay";
interface TextLabelWithValueProps {
  label: string;
  value: string;
}
const TextLabelWithValue: React.FC<TextLabelWithValueProps> = ({
  label,
  value,
}: TextLabelWithValueProps) => {
  return (
    <Box className={styles.container}>
      <TextRegularDisplay> {label} </TextRegularDisplay>
      <TextRegularDisplay> {value} </TextRegularDisplay>
    </Box>
  );
};
export default TextLabelWithValue;
