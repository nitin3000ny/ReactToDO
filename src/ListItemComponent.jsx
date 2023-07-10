import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListItemComponent({ todo, remove, toggle }) {
	const labelId = `checkbox-list-label-${todo.id}`;
	const toggleItem = () => {
		toggle(todo.id);
	};
	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete" onClick={remove}>
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={todo.completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ "aria-labelledby": labelId }}
						onChange={toggleItem}
					/>
				</ListItemIcon>
				<ListItemText
					style={{ color: "black" }}
					id={labelId}
					primary={todo.text}
				/>
			</ListItemButton>
		</ListItem>
	);
}
