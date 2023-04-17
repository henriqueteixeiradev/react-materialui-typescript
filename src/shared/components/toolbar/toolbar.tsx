import { Box, TextField, Button, Paper, useTheme, Icon } from "@mui/material";

type Props = {
  searchText: string;
  showInput?: boolean;
  whensHowingTextFromInput?: (newText: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  whenClickingOnNew?: () => void;
};

export function Toolbar({
  searchText,
  showInput = false,
  whensHowingTextFromInput,
  textNewButton = "Novo",
  showNewButton = true,
  whenClickingOnNew,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      gap={1}
      marginX={1}
      padding={2}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(6)}
    >
      {showInput && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={searchText}
          onChange={(e) => whensHowingTextFromInput?.(e.target.value)}
        />
      )}

      {showNewButton && (
        <Box display={"flex"} flex={1} justifyContent={"end"}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>add</Icon>}
            onClick={whenClickingOnNew}
          >
            {textNewButton}
          </Button>
        </Box>
      )}
    </Box>
  );
}
