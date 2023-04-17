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
  toolbar?: React.ReactNode;
};

export function LayoutBasePage({ children, title, toolbar }: Props) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
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
          height: theme.spacing(smDown ? 6 : mdDown ? 8 : 12),
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderBottom: 1,
          borderColor: theme.palette.divider,
        }}
      >
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </Box>

      {toolbar && <Box>{toolbar}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
}
