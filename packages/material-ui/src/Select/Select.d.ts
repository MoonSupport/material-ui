import * as React from 'react';
import { InternalStandardProps as StandardProps } from '..';
import { InputProps } from '../Input';
import { MenuProps } from '../Menu';
import { SelectInputProps } from './SelectInput';

export interface SelectProps
  extends StandardProps<InputProps, 'value' | 'onChange'>,
    Pick<SelectInputProps, 'onChange'> {
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth?: boolean;
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {
    /** Styles applied to the select component `root` class. */
    root?: string;
    /** Styles applied to the select component `select` class. */
    select?: string;
    /** Styles applied to the select component if `variant="filled"`. */
    filled?: string;
    /** Styles applied to the select component if `variant="outlined"`. */
    outlined?: string;
    /** Styles applied to the select component `selectMenu` class. */
    selectMenu?: string;
    /** Pseudo-class applied to the select component `disabled` class. */
    disabled?: string;
    /** Styles applied to the icon component. */
    icon?: string;
    /** Styles applied to the icon component if the popup is open. */
    iconOpen?: string;
    /** Styles applied to the icon component if `variant="filled"`. */
    iconFilled?: string;
    /** Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined?: string;
    /** Styles applied to the underlying native input component. */
    nativeInput?: string;
  };
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue?: unknown;
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  displayEmpty?: boolean;
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent?: React.ElementType;
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id?: string;
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input?: React.ReactElement<any, any>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps?: InputProps['inputProps'];
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label?: React.ReactNode;
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId?: string;
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   * @default 0
   */
  labelWidth?: number;
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps?: Partial<MenuProps>;
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple?: boolean;
  /**
   * If `true`, the component will be using a native `select` element.
   * @default false
   */
  native?: boolean;
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange?: SelectInputProps['onChange'];
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.ChangeEvent<{}>) => void;
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open?: boolean;
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: SelectProps['value']) => React.ReactNode;
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value?: unknown;
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: 'standard' | 'outlined' | 'filled';
}

export type SelectClassKey = keyof NonNullable<SelectProps['classes']>;

/**
 *
 * Demos:
 *
 * - [Selects](https://material-ui.com/components/selects/)
 *
 * API:
 *
 * - [Select API](https://material-ui.com/api/select/)
 * - inherits [Input API](https://material-ui.com/api/input/)
 */
export default function Select(props: SelectProps): JSX.Element;
