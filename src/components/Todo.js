import { List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todo.css";
import { useDispatch } from "react-redux";
import { updateCaptchaModal, updateSelectedItem } from "../redux/common.slice.js";

const Todo = ({ arr }) => {
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(updateSelectedItem(itemId));
    dispatch(updateCaptchaModal(true));
  };

  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText
          primary={arr.item.todoItem}
        />
      </ListItem>
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7, cursor: 'pointer' }}
        onClick={() => handleDelete(arr.id)}
      />
    </List>
  );
};

export default Todo;
