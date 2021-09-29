import { renderHook, act } from "@testing-library/react-hooks";
import { useTemplateCustomButtons } from "./useTemplateCustomButtons";

const setup = () => renderHook(() => useTemplateCustomButtons());

describe(useTemplateCustomButtons.name, () => {
  it("can init.", () => {
    const { result } = setup();
    expect(result.current.isOpen).toBe(false);
  });

  it("can open and close", () => {
    const { result } = setup();
    const btn = result.current.customButtons;

    // Open
    const onOpen = btn["OPEN_OPTION_BUTTON"].click;
    act(() => onOpen());
    expect(result.current.isOpen).toBe(true);

    // Close
    const onClose = result.current.close;
    act(() => onClose());
    expect(result.current.isOpen).toBe(false);
  });
});
