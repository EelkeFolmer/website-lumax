---
title: "Trout Identification"
weight: 5
image: "https://lumax.ai/images/lightglue_matching_hu2837935384820105659.png"
summary: "Computer vision pipeline that identifies individual trout by their unique spot patterns — like fingerprints."
---

Trout have unique spot patterns — like human fingerprints — that stay unchanged throughout their lives. We use computer vision to identify individual trout automatically, helping researchers track and study these fish in their natural habitat.

## Processing pipeline

1. Detect the trout in the image using object detection
2. Determine the fish's orientation through pose estimation
3. Rotate the image to standardize the fish position
4. Segmentation isolates the trout from the background
5. Key spots are extracted as unique identifiers
6. These patterns are matched against our database of known trout

{{< figure src="https://lumax.ai/images/lightglue_matching_hu2837935384820105659.png" alt="Trout matching" class="theme-img" >}}

You can try this process yourself using our interactive demo app on Huggingface. Select one of the example images or upload a trout image to see the identification pipeline in action.
