import { CSSObjectWithLabel, ControlProps, GroupBase } from "react-select";
import { Genre } from "types/genre";

export const genreSelect = {
    placeholder: (base: CSSObjectWithLabel) => ({
        ...base,
        color: '#FFFFFF'
    }),
    control: (base: CSSObjectWithLabel, state: ControlProps<Genre, false, GroupBase<Genre>>) => ({
        ...base,
        borderRadius: 8,
        backgroundColor: 'unset',
        borderColor: state.isFocused ? 'white' : 'unset',
        boxShadow: state.isFocused ? 'white' : 'unset',
        '&:hover': {
            borderColor: state.isFocused ? 'lightgrey' : 'unset',
        }
    }),
    input: (base: CSSObjectWithLabel) => ({
        ...base,
        color: '#FFFFFF'
    }),
    menuList: (base: CSSObjectWithLabel) => ({
        ...base,
        borderRadius: 8,
        color: '#6C6C6C'
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
        ...base,
        display: 'none'
    }),
    indicatorsContainer: (base: CSSObjectWithLabel) => ({
        ...base,
        svg: {
            fill: '#FFFFFF',
            '&:hover': {
                fill: 'lightgrey'
            }
        }
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
        ...base,
        color: '#FFFFFF'
    }),
    option: (base: CSSObjectWithLabel, { isFocused, isSelected }: any) => ({
        ...base,
        backgroundColor: isSelected
            ? 'lightgrey'
            : isFocused
                ? 'lightgrey'
                : undefined,
        ':active': {
            backgroundColor: 'darkgrey',
            color: 'white',
        },
    })
}