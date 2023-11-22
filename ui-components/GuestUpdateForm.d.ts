import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Guest } from "./graphql/types";
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
export declare type GuestUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    rsvp?: boolean;
    owner?: string;
};
export declare type GuestUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    rsvp?: ValidationFunction<boolean>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuestUpdateFormOverridesProps = {
    GuestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    rsvp?: PrimitiveOverrideProps<SwitchFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GuestUpdateFormProps = React.PropsWithChildren<{
    overrides?: GuestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    guest?: Guest;
    onSubmit?: (fields: GuestUpdateFormInputValues) => GuestUpdateFormInputValues;
    onSuccess?: (fields: GuestUpdateFormInputValues) => void;
    onError?: (fields: GuestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuestUpdateFormInputValues) => GuestUpdateFormInputValues;
    onValidate?: GuestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GuestUpdateForm(props: GuestUpdateFormProps): React.ReactElement;
