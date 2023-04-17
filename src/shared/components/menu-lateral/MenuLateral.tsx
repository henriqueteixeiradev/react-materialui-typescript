import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../hooks";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type IListItemLinkProps = {
  label: string;
  icon: string;
  to: string;
  onClick?: (() => void) | undefined;
};

const ListItemLink = ({ label, icon, to, onClick }: IListItemLinkProps) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const math = useMatch(resolvedPath.pathname);

  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <ListItemButton selected={!!math} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export function MenuLateral({ children }: Props) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  const { isDrawerOpen, toogleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toogleDrawerOpen}
      >
        <Box
          sx={{
            display: "flex",
            width: theme.spacing(28),
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: theme.spacing(20),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                height: theme.spacing(10),
                width: theme.spacing(10),
              }}
              alt="Imagem do usuário"
              src="https://github.com/henriqueteixeiradev.png"
            />
          </Box>

          <Divider />

          <Box sx={{ flex: "1" }}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toogleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box
        sx={{
          height: "100%",
        }}
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  );
}
