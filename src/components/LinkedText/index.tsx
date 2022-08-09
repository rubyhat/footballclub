import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  text: string;
  linkText: string;
  link: string;
  variant: "accent" | "common";
}

const LinkedText = (props: IProps) => {
  const { text, linkText, link, variant } = props;
  const cn = classNames.bind(styles);
  return (
    <div className={cn("linked-text-field")}>
      <Link
        className={cn([
          "link",
          variant === "accent" ? "text_small" : "text_tiny",
          `link-${variant}`,
        ])}
        to={link}
      >
        {text}&nbsp;
        <span>{linkText}</span>
      </Link>
    </div>
  );
};

export default LinkedText;
