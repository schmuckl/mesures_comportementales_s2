### Analysis of the data frm the study reported in:
###
### Bundt C, Ruitenberg M, Abrahamse E, Notebaert W (2018) Early and late
### indications of item-specific control in a `Stroop mouse tracking study.
### PLoS ONE 13(5):e0197278. DOI: 10.1371/journal.pone.0197278.

### Load the foreign package

library (foreign)

### Read the data
###
### The data set is available at the OSF site: https://osf.io/8mcvg/
### One can download the SPSS file or directly access it with the following
### code:
###
### url <- "https://files.osf.io/v1/resources/8mcvg/providers/osfstorage/5af15ca3452e3800106132fb?action=download&direct&version=1"
### dataset <- read.spss (url)

dataset.raw <- read.spss ("Bundt et al..sav")

### Inspect structure

typeof (dataset.raw)
names (dataset.raw)
str (dataset.raw)

### Transform into data frame

dataset <- as.data.frame (dataset.raw)
names (dataset)
str (dataset)

### Inspect variables

table (dataset$subject)
table (dataset$trial)
table (dataset$block)
table (dataset$trial_type)
table (dataset$response)
table (dataset$distractor)
table (dataset$code)
table (dataset$congruency)
table (dataset$prop_congr)
table (dataset$error)
table (dataset$post_error)
table (dataset$error, useNA = "always")

table (dataset [, c("subject")])
table (dataset [, c("subject", "block")])
table (dataset [, c("congruency", "prop_congr")])

summary (dataset$IT)
plot (density (dataset$IT))

summary (dataset$RT)
plot (density (dataset$RT))
plot (density (dataset$RT), log = "x")

summary (dataset$AUC)
plot (density (dataset$AUC))
plot (density (dataset$AUC), log = "x")
