import { useMemo, useCallback } from "react";

export default function useCarTransform(images) {
  const carImages = useMemo(() => {
    return [images.car1, images.car2, images.car3];
  }, [images]);

  const transformCars = useCallback((data) => {
    return data.cars.map((car) => ({
      ...car,
      assignedImage:
        carImages[Math.floor(Math.random() * carImages.length)],
    }));
  }, [carImages]);

  return transformCars;
}