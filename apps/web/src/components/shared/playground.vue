<script setup>
import Accordion from '../vue/Accordion.vue'
import Avatar from '../vue/Avatar.vue'
import Carousel from '../vue/Carousel.vue'
import Checkbox from '../vue/Checkbox.vue'
import Clipboard from '../vue/Clipboard.vue'
import ColorPicker from '../vue/ColorPicker.vue'
import Combobox from '../vue/Combobox.vue'
import ContextMenu from '../vue/ContextMenu.vue'
import Dialog from '../vue/Dialog.vue'
import Editable from '../vue/Editable.vue'
import FileUpload from '../vue/FileUpload.vue'
import HoverCard from '../vue/HoverCard.vue'
import Menu from '../vue/Menu.vue'
import NestedMenu from '../vue/NestedMenu.vue'
import NumberInput from '../vue/NumberInput.vue'
import Pagination from '../vue/Pagination.vue'
import PinInput from '../vue/PinInput.vue'
import Popover from '../vue/Popover.vue'
import Presence from '../vue/Presence.vue'
import ProgressCircular from '../vue/ProgressCircular.vue'
import ProgressLinear from '../vue/ProgressLinear.vue'
import RadioGroup from '../vue/RadioGroup.vue'
import RangeSlider from '../vue/RangeSlider.vue'
import RatingGroup from '../vue/RatingGroup.vue'
import SegmentedControl from '../vue/SegmentedControl.vue'
import Select from '../vue/Select.vue'
import SignaturePad from '../vue/SignaturePad.vue'
import Slider from '../vue/Slider.vue'
import Splitter from '../vue/Splitter.vue'
import Switch from '../vue/Switch.vue'
import Tabs from '../vue/Tabs.vue'
import TagsInput from '../vue/TagsInput.vue'
import ToggleGroup from '../vue/ToggleGroup.vue'
import Tooltip from '../vue/Tooltip.vue'

const props = defineProps(['id'])

const components = {
  Accordion,
  Avatar,
  Carousel,
  Checkbox,
  Clipboard,
  ColorPicker,
  Combobox,
  ContextMenu,
  Dialog,
  Editable,
  FileUpload,
  HoverCard,
  Menu,
  NestedMenu,
  NumberInput,
  Pagination,
  PinInput,
  Popover,
  Presence,
  ProgressCircular,
  ProgressLinear,
  RadioGroup,
  RangeSlider,
  RatingGroup,
  SegmentedControl,
  Select,
  SignaturePad,
  Slider,
  Splitter,
  Switch,
  Tabs,
  TagsInput,
  ToggleGroup,
  Tooltip,
}
</script>

<template>
  <component :is="components[props.id]" />
</template>
