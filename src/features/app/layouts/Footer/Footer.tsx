import { Link } from "@/components/ui/Link/Link.styled";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Title>
        <Typography variant="body-2">Made with</Typography>

        <S.HeartIcon />

        <Typography variant="body-2">
          <Link
            target="_blank"
            to="https://github.com/mmcode9407"
            $color="primary">
            by MM
          </Link>
        </Typography>
      </S.Title>

      <Typography variant="body-2" align="center">
        {currentYear} &copy; All rights reserved
      </Typography>
    </S.Footer>
  );
};

export { Footer };
