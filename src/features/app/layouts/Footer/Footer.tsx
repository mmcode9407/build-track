import { Link } from "@/components/ui/Link/Link.styled";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Title>
        <Typography variant="body-sm">Made with</Typography>

        <S.HeartIcon />

        <Typography variant="body-sm">
          <Link
            target="_blank"
            to="https://github.com/mmcode9407"
            $color="primary">
            by MM
          </Link>
        </Typography>
      </S.Title>

      <Typography variant="body-sm" align="center">
        {currentYear} &copy; All rights reserved
      </Typography>
    </S.Footer>
  );
};

export { Footer };
