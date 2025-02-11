---
title: ""
meta_title: ""
description: ""
draft: false
banner_background: "images/trout_banner.jpg"
---
## Trout Identification

Trout have unique spot patterns - like human fingerprints - that stay unchanged throughout their lives. We use computer vision to identify individual trout automatically, helping researchers track and study these fish in their natural habitat.

Our processing pipeline combines multiple machine learning models to identify individual trout:

1. First, we detect the trout in the image using object detection
2. Next, we determine the fish's orientation through pose estimation
3. The image is then rotated to standardize the fish position
4. Segmentation isolates the trout from the background
5. Key spots are extracted as unique identifiers
6. Finally, these patterns are matched against our database of known trout

{{< image src="/images/lightglue_matching.png" caption="" alt="alter-text" height="286" width="533" position="left" command="fill" option="q100" class="img-fluid" title="image title" webp="false" >}}

### Interactive demo app

You can try this process yourself using our interactive demo app below, hosted on Huggingface. Select one of the example images or upload a trout image to see the identification pipeline in action.

<iframe
	src="https://lumax-eco-trout-reid.hf.space"
	frameborder="0"
	width="850"
	height="650"
></iframe>