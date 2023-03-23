### Analysis of the data frm the study reported in:
###
### Bundt C, Ruitenberg M, Abrahamse E, Notebaert W (2018) Early and late
### indications of item-specific control in a `Stroop mouse tracking study.
### PLoS ONE 13(5):e0197278. DOI: 10.1371/journal.pone.0197278.

library (lme4)
library (lmerTest)

### * Get the data
source ("inspect-data.r")

### * Descriptive statistics

### ** Movement Time (MT)

### *** Boxplot
boxplot (RT ~ congruency * prop_congr, dataset)

### *** Boxplot with Y axis in logarithmic scale
boxplot (RT ~ congruency * prop_congr, dataset, log = "y")

### ** Area Under Curve (AUC)

### ** Boxplot
boxplot (AUC ~ congruency * prop_congr, dataset)

### * Statistical inferences

### ** Cope with errors

### *** Verify magnitude
boxplot (RT ~ error, dataset, log = "y")
boxplot (RT ~ post_error, dataset, log = "y")

### *** Omit trials with errors
idx <- which (dataset$post_error == 0)
dataset.ok <- dataset [idx, ]
dataset.ok <- subset (dataset, post_error == 0)
boxplot (RT ~ congruency * prop_congr, dataset.ok, log = "y")

### ** Average results for participants in each condition
dataset.agg <- aggregate (cbind (RT, AUC) ~ congruency * prop_congr * subject,
                          dataset.ok,
                          mean)

### *** Inspect data
str (dataset.agg)
boxplot (RT ~ congruency * prop_congr, dataset.agg, log = "y")
boxplot (AUC ~ congruency * prop_congr, dataset.agg)

### ** ANOVA

### *** Movement time
fm <- lm (RT ~ congruency + prop_congr, dataset.agg)
fm <- lm (RT ~ congruency + prop_congr + congruency:prop_congr, dataset.agg)
fm <- lm (RT ~ congruency * prop_congr, dataset.agg)
fm
anova (fm)

### *** Area under curve
fm <- lm (AUC ~ congruency * prop_congr, dataset.agg)
anova (fm)

### ** Mixed effects model

### *** Movement time
fm.lmer <- lmer (RT ~ congruency * prop_congr + (1 | subject),
                 dataset.agg)
fm.lmer
anova (fm.lmer)
ranova (fm.lmer)
ranef (fm.lmer)

### *** Area Under Curve (AUC)
fm.lmer <- lmer (AUC ~ congruency * prop_congr + (1 | subject),
                 dataset.agg)
fm.lmer
anova (fm.lmer)
ranova (fm.lmer)
ranef (fm.lmer)

### * Compute AUC

### ** Select data for subject #1 and trial #5
dataset.s1 <- subset (dataset.ok, subject == 1)
dataset.s1.t5 <- subset (dataset.ok, subject == 1 & trial == 5)

### ** Extract X and Y mouse coordinates
x <- as.numeric (dataset.s1.t5 [, seq (15, 115)])
x <- as.numeric (dataset.s1.t5 [15 : 115])
y <- as.numeric (dataset.s1.t5 [, seq (116, 216)])
plot (x, y, asp = 1)
lines (c (x, x[1]), c (y, y[1]))

### ** Compute AUC
source ("area-polygon.r")
area.polygon(c (x, x[1]), c (y, y[1]))
dataset.s1.t5$AUC
