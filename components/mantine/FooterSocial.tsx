import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Footer,
} from "@mantine/core";
import {
  BrandTwitter,
  BrandYoutube,
  BrandDiscord,
  BrandGithub,
} from "tabler-icons-react";
import MadeWithLove from "../shared/MadeWithLove";

const useStyles = createStyles((theme) => ({
  footer: {
    /*marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,*/
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Footer height={80}>
        <Container className={classes.inner}>
          <MadeWithLove />
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <a href="https://twitter.com/TheTomatophile">
              <ActionIcon size="lg">
                <BrandTwitter size={18} />
              </ActionIcon>
            </a>
            <a href="https://youtube.com/c/tomatophile">
              <ActionIcon size="lg">
                <BrandYoutube size={18} />
              </ActionIcon>
            </a>
            <a href="https://discord.gg/tomat">
              <ActionIcon size="lg">
                <BrandDiscord size={18} />
              </ActionIcon>
            </a>
            <a href="https://github.com/Steviegt6">
              <ActionIcon size="lg">
                <BrandGithub size={18} />
              </ActionIcon>
            </a>
          </Group>
        </Container>
      </Footer>
    </div>
  );
}
