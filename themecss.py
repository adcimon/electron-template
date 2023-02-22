#
#--------------------------------------------------------------------------
# Palette
#--------------------------------------------------------------------------
#

palette = {
	"base": { # 60%
		"50": [250, 250, 250],
		"100": [244, 244, 245],
		"200": [228, 228, 231],
		"300": [212, 212, 216],
		"400": [161, 161, 170],
		"500": [113, 113, 122],
		"600": [82, 82, 91],
		"700": [36, 38, 45],
		"800": [26, 28, 35],
		"900": [18, 19, 23],
	},
	"primary": { # 30%
		"50": [236, 254, 255],
		"100": [207, 250, 254],
		"200": [165, 243, 252],
		"300": [103, 232, 249],
		"400": [34, 211, 238],
		"500": [6, 182, 212],
		"600": [8, 145, 178],
		"700": [14, 116, 144],
		"800": [21, 94, 117],
		"900": [22, 78, 99],
	},
	"secondary": { # 10%
		"50": [239, 246, 255],
		"100": [219, 234, 254],
		"200": [191, 219, 254],
		"300": [147, 197, 253],
		"400": [96, 165, 250],
		"500": [59, 130, 246],
		"600": [37, 99, 235],
		"700": [29, 78, 216],
		"800": [30, 64, 175],
		"900": [30, 58, 138],
	},
	"green": {
		"50": [240, 253, 244],
		"100": [220, 252, 231],
		"200": [187, 247, 208],
		"300": [134, 239, 172],
		"400": [74, 222, 128],
		"500": [34, 197, 94],
		"600": [22, 163, 74],
		"700": [21, 128, 61],
		"800": [22, 101, 52],
		"900": [20, 83, 45],
	},
	"yellow": {
		"50": [254, 252, 232],
		"100": [254, 249, 195],
		"200": [254, 240, 138],
		"300": [253, 224, 71],
		"400": [250, 204, 21],
		"500": [234, 179, 8],
		"600": [202, 138, 4],
		"700": [161, 98, 7],
		"800": [133, 77, 14],
		"900": [113, 63, 18],
	},
	"red": {
		"50": [254, 242, 242],
		"100": [254, 226, 226],
		"200": [254, 202, 202],
		"300": [252, 165, 165],
		"400": [248, 113, 113],
		"500": [239, 68, 68],
		"600": [220, 38, 38],
		"700": [185, 28, 28],
		"800": [153, 27, 27],
		"900": [127, 29, 29],
	},
}

#
#--------------------------------------------------------------------------
# File
#--------------------------------------------------------------------------
#

f = open("Theme.css", "w")

#
#--------------------------------------------------------------------------
# Root
#--------------------------------------------------------------------------
#

f.write(":root {\n")
for color in palette:
	for tint in palette[color]:
		str = "\t--{c}-color-{t}: {r}, {g}, {b};\n"
		str = str.format(c=color, t=tint, r=palette[color][tint][0], g=palette[color][tint][1], b=palette[color][tint][2])
		f.write(str)
f.write("}\n\n")

#
#--------------------------------------------------------------------------
# Text
#--------------------------------------------------------------------------
#

text_classes = """/* Text */

.text-opacity-0 {
	--text-opacity: 0 !important;
}

.text-opacity-5 {
	--text-opacity: 0.05 !important;
}

.text-opacity-10 {
	--text-opacity: 0.1 !important;
}

.text-opacity-20 {
	--text-opacity: 0.2 !important;
}

.text-opacity-25 {
	--text-opacity: 0.25 !important;
}

.text-opacity-30 {
	--text-opacity: 0.3 !important;
}

.text-opacity-40 {
	--text-opacity: 0.4 !important;
}

.text-opacity-50 {
	--text-opacity: 0.5 !important;
}

.text-opacity-60 {
	--text-opacity: 0.6 !important;
}

.text-opacity-70 {
	--text-opacity: 0.7 !important;
}

.text-opacity-75 {
	--text-opacity: 0.75 !important;
}

.text-opacity-80 {
	--text-opacity: 0.8 !important;
}

.text-opacity-90 {
	--text-opacity: 0.9 !important;
}

.text-opacity-95 {
	--text-opacity: 0.95 !important;
}

.text-opacity-100 {
	--text-opacity: 1 !important;
}

.text-white {
	--text-opacity: 1;
	color: rgba(255, 255, 255, var(--text-opacity));
}

.text-black {
	--text-opacity: 1;
	color: rgba(0, 0, 0, var(--text-opacity));
}
"""
f.write(text_classes)
f.write("\n")

for color in palette:
	for tint in palette[color]:
		# Normal
		str = ".text-{c}-{t} {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Hover
		str = ".hover\:text-{c}-{t}:hover {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Active
		str = ".active\:text-{c}-{t}:active {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Focus
		str = ".focus\:text-{c}-{t}:focus {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

#
#--------------------------------------------------------------------------
# Background
#--------------------------------------------------------------------------
#

f.write("/* Background */\n")
f.write("\n")

for color in palette:
	for tint in palette[color]:
		# Normal
		str = ".bg-{c}-{t} {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Hover
		str = ".hover\:bg-{c}-{t}:hover {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Active
		str = ".active\:bg-{c}-{t}:active {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Focus
		str = ".focus\:bg-{c}-{t}:focus {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

#
#--------------------------------------------------------------------------
# Border
#--------------------------------------------------------------------------
#

f.write("/* Border */\n")
f.write("\n")

for color in palette:
	for tint in palette[color]:
		# Normal
		str = ".border-{c}-{t} {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Hover
		str = ".hover\:border-{c}-{t}:hover {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Active
		str = ".active\:border-{c}-{t}:active {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

		# Focus
		str = ".focus\:border-{c}-{t}:focus {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

#
#--------------------------------------------------------------------------
# Shadow
#--------------------------------------------------------------------------
#

shadow_classes = """/* Shadow */

.shadow-opacity-0 {
	--shadow-opacity: 0 !important;
}

.shadow-opacity-5 {
	--shadow-opacity: 0.05 !important;
}

.shadow-opacity-10 {
	--shadow-opacity: 0.1 !important;
}

.shadow-opacity-20 {
	--shadow-opacity: 0.2 !important;
}

.shadow-opacity-25 {
	--shadow-opacity: 0.25 !important;
}

.shadow-opacity-30 {
	--shadow-opacity: 0.3 !important;
}

.shadow-opacity-40 {
	--shadow-opacity: 0.4 !important;
}

.shadow-opacity-50 {
	--shadow-opacity: 0.5 !important;
}

.shadow-opacity-60 {
	--shadow-opacity: 0.6 !important;
}

.shadow-opacity-70 {
	--shadow-opacity: 0.7 !important;
}

.shadow-opacity-75 {
	--shadow-opacity: 0.75 !important;
}

.shadow-opacity-80 {
	--shadow-opacity: 0.8 !important;
}

.shadow-opacity-90 {
	--shadow-opacity: 0.9 !important;
}

.shadow-opacity-95 {
	--shadow-opacity: 0.95 !important;
}

.shadow-opacity-100 {
	--shadow-opacity: 1 !important;
}
"""
f.write(shadow_classes)
f.write("\n")

for color in palette:
	for tint in palette[color]:
		str = ".focus\:shadow-outline-{c}-{t}:focus {{\n\t--shadow-opacity: 0.5;\n\tbox-shadow: 0 0 0 3px rgba(var(--{c}-color-{t}), var(--shadow-opacity));\n}}\n\n"
		str = str.format(c=color, t=tint)
		f.write(str)

f.close()