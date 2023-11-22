import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GuestCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    rsvp?: boolean;
    owner?: string;
};
export declare type GuestCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    rsvp?: ValidationFunction<boolean>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuestCreateFormOverridesProps = {
    GuestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    rsvp?: PrimitiveOverrideProps<SwitchFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GuestCreateFormProps = React.PropsWithChildren<{
    overrides?: GuestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GuestCreateFormInputValues) => GuestCreateFormInputValues;
    onSuccess?: (fields: GuestCreateFormInputValues) => void;
    onError?: (fields: GuestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuestCreateFormInputValues) => GuestCreateFormInputValues;
    onValidate?: GuestCreateFormValidationValues;
} & React.CSSProperties>;
export default function GuestCreateForm(props: GuestCreateFormProps): React.ReactElement;
