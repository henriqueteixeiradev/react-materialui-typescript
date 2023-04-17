import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../hooks";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function LayoutBasePage({ children, title }: Props) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  const { toogleDrawerOpen } = useDrawerContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 1,
      }}
    >
      <Box
        sx={{
          padding: 1,
          height: theme.spacing(12),
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5" component="h1">
          {title}
        </Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
}
