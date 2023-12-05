import { useBreakpoint } from "./useBreakpoint";

export const useResponsive = () => {
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === "xs" || breakpoint === "sm";
    const isDesktop = breakpoint === 'md' || breakpoint === 'lg' || breakpoint === "xl" || breakpoint === "2xl";

    return {
        isMobile,
        isDesktop,
    };
};
