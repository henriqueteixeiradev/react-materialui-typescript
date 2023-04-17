import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../hooks";

type Props = {
  children: React.ReactNode;
};

export function MenuLateral({ children }: Props) {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toogleDrawerOpen } = useDrawerContext();

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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box
        sx={{
          height: "100vh",
        }}
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  );
}
