export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonThemeType = 'transparent' | 'bordered';

export type ButtonPropsType = {
    type: ButtonType;
    theme?: ButtonThemeType;
    children?: React.ReactNode;
    classes?: string;
    onClick?: () => void;
};
