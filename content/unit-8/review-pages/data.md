---
title: "Data"
metaTitle: "Data"
order: 1
---

## Data Review

<Info>

**DAT Conceptual Framework**

[Big Idea 2: Data (DAT)](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=227)
</Info>

### 1. Binary Numbers 

* Every piece of data in our computer can be represented by Ones and Zeros.
* Each one or zero is called a “bit” and represents the smallest cell in a computer’s memory.
* You can think of a bit as an On/Off switch – a bit is either 1 or 0 (on or off / true or false).
* And a computer has millions of these bits in its memory.
* All the data we store in a computer’s memory – word documents, video files, images, excel spreadsheets, these all get converted into 1’s and 0’s when stored in computer memory.
* A byte is a unit of digital information that consists of 8 bits. In other words 1 byte = 8 bits.
* To convert bits to bytes, you take the number of bits in a message and then divide it by 8.
* To convert bytes to bits, you take the number of bytes and multiple it by 8.
* Why are they called bytes?
* A byte is how much a computer likes to "bite" at once.
* The byte is also the smallest addressable unit of memory in most modern computers.
* In other words, a computer with byte-addressable memory can NOT store an individual piece of data that is smaller than a byte.
* Even though computers "bite" 8 bits of data a time, they can also "nibble".
* When a computer "nibbles" it is processing 4 of the 8 bits.
* With the binary number system, we only have 2 digits to play with.
* Instead of 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 in the decimal system, in binary, we only have 0 and 1.
* Each position also carries a value, but instead of multiplying by 10 for each placeholder, we multiply by the power of 2.
* So, instead of 1, 10, 100, 1000 to represent the different number places, we use 1, 2, 4, 8, 16.
* Using the binary system, we can represent any number we want to represent with just 1’s and 0’s!
* It is not only numbers, however, that are represented with the binary system.
* In fact, everything in a computer is represented with the binary system.
* Texts, images, and sound can also be represented with binary numbers.
* Each letter in the alphabet is assigned a number in the binary system.
* You can represent a word or a paragraph as a sequence of numbers.
* To represent non-numbers like letters and symbols, programmers must agree on "encodings", or mappings from a character to a binary number.
* ASCII is one of the first standardized encodings invented.
* Each ASCII character is encoded in binary using 7 bits.
* ASCII cannot encode enough text to cover characters from a different language.
* Another challenge is that ASCII only uses 7 bits, but as we have learned computers typically store information by 8 bits (or 1 byte) and programmers do not want to waste memory.
* For some time, the extra bit would be used for different characters.
* In one computer program, for example, the 8th bit represented characters from European countries, and another computer used it for colored graphics.
* When this occurred, if one computer tried to read the other computers information, it would decode the information incorrectly and it would look odd or indecipherable.
* The Unicode, a universal character set which assigns each character a "code point" (a hexadecimal number) and a name to each character.
* Unicode saves space by unifying characters across languages.
* In 1991, the Unicode character set started with 7,129 named characters.
* In 2020, there are 143,859 named characters!
* Unicode will support around 1,000,000 characters to there is plenty of room to grow.
* Generally, a good encoding is one that represents the maximum amount of information with the least number of bits.
UTF-8, created in 1992, is an example of good encoding.
* With UTF-8, computer scientists invented an encoding that  is compatible with ASCII encoding but also solves its problems.
* UTF-8 can describe every character from the Unicode standard using 1 to 4 bytes.
* When a computer reads a UTF-8 text file, it knows how many bytes represent the next character based on how many 1 bits it finds at the beginning of the byte.
* If the first bit is not a 1, then that indicates a character represented by a single byte, which means the remaining 7 bits of the byte represent the original 128 ASCII characters. 
* Two bytes indicates Latin-script languages (Spanish, German) and other languages like Greek, Hebrew and Arabic.
* Three bytes represents most Asian languages (Chinese, Japanese, and Korean).
* Four bytes represents everything else, like rarely used historical scripts and emojis.
* Digital data, however, is not the only type of data.
* Analog data is data that is represented in a physical way.
* While digital data is storied as a set of symbols, analog data is stored in a physical way.
* For analog data to be converted to digital form, it must be recorded and represented using specific technologies.
* Typically, digital data uses the binary system to build data sets that represent analog data, like audio or video.
* Analog and digital data differ in their unlimited or limited values.
* Analog data is infinite – there are an infinite number of tones you can hear, smells, colors in the physical, or analog, world.
* With digital data, however, there is a limited set of values you can represent – whether that limit be 8, 255, or 4 million, there is a limit.
* Additionally, because the flow of analog data is infinite, it is more accurate.
* A clock that has a second hand is more precise and exact that a digital clock that is only displaying the hour and minutes.
* Digital data, however, is easier to process so it is more convenient.
* Finally, if you duplicate analog data, every time you do so, you degrade the data a bit.
* Because of this, for example, if you record a song on a cassette tape, and then make a recording off of that cassette tape, and keep recording off of the new cassette, the second, third, fourth recording will not sound as good as the original and the further away it gets from the original the worse the sound will be.
* With a digital recording, however, you can copy it multiple times and the quality will not be degraded.
* Analog data is harder to store digitally, but it can be done.
* The way analog is converted to digital differs based on the type of analog data.
* With sounds, every sound is essentially a series of vibrations in the ear.
* Vibrations can be represented graphically as a wave form.
* Any point on this wave form can be represented by a number, which means any sound can be broken down into a series of numbers.
* For higher quality sound, you would pick 32-bit audio over 8-bit audio because it allows you to represent more points on the wave form.
* The more bits, the higher the range of numbers.
* What is sampling?
    * A computer cannot store an infinite number of values for loudness and frequency, so the sound is sampled at regular intervals and at each intervals a numeric value of loudness is recorded.
    * The numbers are a digitized representation of the soundwave.
* Why would you want to increase the sample rate?
    * When a recording is played back, it will not be exactly the same as the original sound and the quality may not be as good.
    * To improve the quality, the original analog wave can be sampled more frequently.
    * We can increase the sample rate.
    * The larger the sample rate the more accurate the sound recording, but it will be a larger file.
* How much does a high frequency sound have to be sampled to be accurate?
    * The wave must be sampled at least twice per cycle.
* How are sample rates measured?
    * Samples per second - mainly Hertz.
* What is bit depth?
    * The number of binary digits available to record the loudness of the sample.
* Images are also analog data that can be converted to digital.
* With an image, the image is made of very small dots called pixels and each pixel has a color.
* Each of the colored dots can be represented with numbers known as RGB (Red Green Blue), requiring lots of data.
* For images, hexadecimal encoding is used on web pages to place colors.
* Colors are a mix of Red, Green, and Blue.
* On webpages, the format is #RRGGBB so RR is how much red is being used, GG is how much green, and BB is how much blue.
* We will discuss this more on another day, but hexadecimal is a 16-base number system.
* With a 16 base, colors can range from zero to 255.
* Because each of the colors can have a value from zero to 255 (which is 256 possible values), you can create over 16 million colors!
* Every computer has a defined range of values that it can represent.
* That range is determined by the limitations of the computer’s memory.
* The computer’s memory is also limited by how the computer’s programming language stores integers and non-integers.
* When a computer program stores numbers in variables, it needs to find a way to represent that number in computer memory.
* Computers use different strategies based on whether a number is an integer or not.
* An integer is any number that can be written without a fractional component.
* Computers represent all data with bits, so we know each of these integers are a sequence of ones and zeroes.
* So, if one of the bits must represent the positive or negative sign, then it limits how many bits a computer can use to represent integers.
* Depending on the design of the program, when the program calculates above its defined range, it may:
    * Report an "overflow error"
    * Display "number is too large"
    * Truncate the number (capping all results to 31), or
    * Wrap the number around (so 32 becomes 1).
* While a computer cannot exceed the largest integer its storage will allow, it also has limitations on the way it represents non-integers.
* Numbers that are not integers - fractions, irrational numbers - are even harder to represent in a computer.
* Because they are not whole numbers, computers must represent these numbers in a different way.
* Computer languages typically use floating-point representation for non-integers.
* It's similar to scientific notation.
* In floating-point representation, a number is multiplied by a base that's raised on an exponent.
* Floating point means that there is no fixed number of digits before and after the decimal point.
* In other words, the decimal point can float, and the computer can still process it.
* Because computers use binary instead of the decimal system, the base for floating-point numbers is 2 instead of 10.
* The key point to understand regarding how a computer represents numbers is that when we perform numeric computations on a computer, we have to be aware of the limitations of the computer’s precision as well as its capacity to store numbers.
* Because of its precision and storage limitations, computer calculations can create three types of errors:
    * Rounding error is the difference between the rounded approximate number and the actual number that we want to the computer to represent.
    * Overflow error is when the number is too large for the computer to represent it; it will display as being approximated as infinity, as minus infinity, or with an odd sign change.
    * Underflow error is when the number we want to store is too close to zero that the computer then selects to represent the number as zero because of the lack of precision in the system. This underflow error will cause an error later when the computer needs to use that stored zero in a calculation.

### 2. Data Compression

* Data compression is the process of reducing the source coding, or bit-rate, by encoding information with few bits and the original.
* Data compression takes data that is ready to use to a format that is smaller to optimize storage and transfer.
* A decompression program changes compressed data back into ready to use data.
* There are two types of data compression:
    * Lossless, and
    * Lossy
* Lossless compression means that the data is compressed without any loss of information or quality.
* With lossless, the computer can recreate the original data form the compressed data.
* When decompressed, it will look exactly like it did before the compression.
* With lossy, some of the information is lost or loses some of its quality when it is compressed.
* While computers can capture a large amount of detail in a photo, or song, for example, we cannot perceive all of those details.
* So losing some of those details with the data compression is okay because, when the detail is removed, we do not notice it much.
* With lossy compression, the computer cannot recreate the original data from the compressed data.
* When the file is decompressed it will not contain the same amount of data as the original file.
* Some of the information is lost, and it may not look as good as the original.
* For example, the human eye is better at perceiving brightness than color.
* A compression program can, therefore, keep the brightness of an image while reducing the color information in order to save space.
* JPEG is a widely used lossy compression format for images.
* When you save a jpeg, you can control the amount of compression to reach a balance between compressing the file and preserving the quality of the image.
* JPEG is most frequently used for digitized photographs that are used on web pages.
* While JPEG is used for digitized photographs, gifs are more often used with simple drawn images like logos, graphics, and animations because it only supports 256 colors.
* GIF is an example of a lossless compression of images and is the predecessor to PNG.
* PNG is also a lossless compression format.
* Unlike GIF, however, because it supports a large number of colors, it produces high-quality web graphics as well as transparency settings.
* With a compression algorithm, computers look for repeated words or letters in a text and replace them with shorter representations.
* A computer that does this will also have to include a legend for each word so that when the file is decompressed it can recreate the original.
* When compressing textual data in documents on a computer program, lossless compression is necessary because if you used lossy compression the document would be unreadable.
* Lots of techniques for compression exist.
* One technique is run length encoding.
* With run length encoding, it scans the data you want to compress, and, for each item, it records the run length or the number of times it occurs followed by the item itself.

### 3. Extracting Information from Data

* Data analysis is the process of collecting, cleaning, and visualizing data in order to answer a question, make a decision, solve a problem, or inform/educate people.
* Data itself is useless without being about to find patterns, pull out insights, and figure out what the data is telling us.
* The Data Science process:
    * Planning
    * Collecting
    * Cleansing
    * Visualization
    * Actions/Recommendations
* When you analyze data to answer a question, you must think critically about what you are receiving and reviewing.
* Digitally processed data may show a correlation between variables.
* A correlation found in data does not necessarily indicate that a causal relationship exists.
* Additional research is needed to understand the exact nature of the relationship.
* With all the collection data methods, they are classified as either quantitative or qualitative.
* Quantitative data is numerical.
* It is collected through counting or measuring.
* Qualitative data is non-numerical.
* It is collected through observations, interviews, focus groups, etc.
* It is sometimes referred to as categorical data.
* It is data can be arranged in categories based on anything that does not have a number associated with it, like physical traits, gender, race, etc.
* They also use metadata to gather information.
* Metadata are data about data, or more specific terms, metadata are details about a piece of information that helps us understand or know more about that information.
* In addition to the metadata found on a webpage, with digital data, computer programmers can gather details from users by looking at their metadata.
* A company can learn about a person and what is important to them by looking at their searches, their posts, what they tag, like, bookmark, who they talk to and how often they talk to those people.
* Organizations can use this information to send you targeted ads, recommend upcoming shows, or suggest your next vacation.
* It is important to consider who you are sharing your information with and what they are doing with it.

### 4. Using Programs with Data

* The ability to process the data will depend on the capabilities of our knowledge of how to create charts, our analytical abilities, and the Excel tools available to us.
* Regardless of the size of our data set, it can pose challenges.
* You may discover that the data is incomplete in some way, some of the data may be invalid, or you may need to combine some of the data sources.
* Additionally, as you evaluate the data, you may find that it may not be uniform.
* Respondents, for example, who responded to an open-ended question, may have abbreviated words, misspelled words.
* When you notice problems with the data, you need to cleanse it, which is the process of amending or removing any of the data that is incorrect, incomplete, improperly formatted, or duplicated.
* Cleaning data is a process that makes the data uniform without changing its meaning.
* One of the best ways to help you understand what the data is telling you is through data visualization charts.
* There are many different types of graphs you can use.
* These are the three types of charts that are the most common, although there are many more: 
    * Line Graph – plots data points over time, good for showing trends
    * Bar or Column Charts – compares data among different categories
    * Pie Charts – represents the composition of something, good to show percentages