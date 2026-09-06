// =====================================================
// NEXORA GLOBAL SCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // TOAST SYSTEM
    // =====================================================

    function showToast(message, type = "info") {

        const toastContainer =
            document.getElementById("toastContainer");

        if (!toastContainer) return;

        const toast =
            document.createElement("div");

        let icon = "";
        let border = "";
        let iconColor = "";

        if (type === "success") {

            icon = "fa-circle-check";
            border = "border-green-400";
            iconColor = "text-green-400";

        } else if (type === "error") {

            icon = "fa-circle-xmark";
            border = "border-red-400";
            iconColor = "text-red-400";

        } else if (type === "warning") {

            icon = "fa-triangle-exclamation";
            border = "border-yellow-400";
            iconColor = "text-yellow-400";

        } else {

            icon = "fa-circle-info";
            border = "border-cyan-400";
            iconColor = "text-cyan-400";

        }

       /* toast.className = `
            pointer-events-auto
            bg-[#121826]
            border
            ${border}
            rounded-xl
            px-5
            py-4
            shadow-2xl
            flex
            items-center
            gap-3
            text-white
            transform
            -translate-y-10
            opacity-0
            transition-all
            duration-300
        `;*/

        toast.className = `
            pointer-events-auto
            bg-[#121826]
            border
            ${border}
            rounded-xl
            px-5
            py-4
            shadow-2xl
            flex
            items-center
            gap-3
            text-white
            transform
            -translate-y-10
            opacity-0
            transition-all
            duration-300
        `;

        toast.innerHTML = `
            <i class="fa-solid ${icon} ${iconColor} text-xl"></i>

            <span class="text-sm font-medium">
                ${message}
            </span>
        `;

        toastContainer.appendChild(toast);

        requestAnimationFrame(function () {

            toast.classList.remove(
                "-translate-y-10",
                "opacity-0"
            );

        });

        setTimeout(function () {

            toast.classList.add(
                "-translate-y-10",
                "opacity-0"
            );

            setTimeout(function () {

                toast.remove();

            }, 300);

        }, 3000);

    }

       // ================= DOWNLOAD PRIVACY POLICY AS PDF =================

    function downloadPrivacyPolicy() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const margin = 20;

    const pageWidth =
        doc.internal.pageSize.getWidth();

    const textWidth =
        pageWidth - (margin * 2);

    let y = 20;


    // ================= TITLE =================

    doc.setFont("helvetica", "bold");

    doc.setFontSize(22);

    doc.text(
        "NEXORA",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 12;


    doc.setFontSize(18);

    doc.text(
        "Privacy Policy",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 10;


    // ================= DATE =================

    doc.setFont("helvetica", "normal");

    doc.setFontSize(10);

    doc.text(
        "Last Updated: August 2026",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 18;


    // ================= CONTENT =================

    const sections = [

        {
            title: "1. Introduction",
            text:
                "Welcome to Nexora. We respect your privacy and are committed to protecting the information you provide while using our website and services."
        },

        {
            title: "2. Information We Collect",
            text:
                "Depending on how you interact with Nexora, the website may collect information such as your name, email address, account information, shopping activity and information submitted through contact forms."
        },

        {
            title: "3. How We Use Information",
            text:
                "Information may be used to provide and improve the Nexora shopping experience, manage accounts, support shopping and wishlist functionality, respond to inquiries and improve website functionality."
        },

        {
            title: "4. Account Information",
            text:
                "If you create an account on Nexora, certain account information may be stored by the website to support registration and login features. Users should keep their account credentials secure."
        },

        {
            title: "5. Cookies & Local Storage",
            text:
                "Nexora may use browser technologies such as cookies or local storage to support website functionality, account states, cart items and wishlist items."
        },

        {
            title: "6. Data Security",
            text:
                "We aim to maintain appropriate safeguards for information handled through the website. However, no online system can be guaranteed to be completely secure."
        },

        {
            title: "7. Third-Party Services",
            text:
                "Nexora may use third-party technologies or services to support website functionality. Such services may have their own privacy policies."
        },

        {
            title: "8. Children's Privacy",
            text:
                "Nexora is designed as a general gaming and creator gear store and does not intentionally restrict ordinary browsing based solely on age. Parents or guardians are encouraged to supervise minors when using online shopping services."
        },

        {
            title: "9. Changes to This Privacy Policy",
            text:
                "This Privacy Policy may be updated from time to time as the website develops. Any updated version will be published on this page with a revised update date."
        },

        {
            title: "10. Contact Us",
            text:
                "If you have questions or concerns regarding this Privacy Policy, please contact the Nexora support team through our Contact page."
        }

    ];


    // ================= WRITE CONTENT =================

    sections.forEach(section => {

        if (y > 255) {

            doc.addPage();

            y = 20;

        }


        doc.setFont("helvetica", "bold");

        doc.setFontSize(13);

        doc.text(
            section.title,
            margin,
            y
        );

        y += 8;


        doc.setFont("helvetica", "normal");

        doc.setFontSize(10);

        const lines =
            doc.splitTextToSize(
                section.text,
                textWidth
            );


        lines.forEach(line => {

            if (y > 275) {

                doc.addPage();

                y = 20;

            }

            doc.text(
                line,
                margin,
                y
            );

            y += 5;

        });


        y += 8;

    });


    // ================= FOOTER =================

    const totalPages =
        doc.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        doc.setPage(page);

        doc.setFontSize(8);

        doc.setTextColor(120);

        doc.text(
            `Nexora • Privacy Policy • Page ${page} of ${totalPages}`,
            pageWidth / 2,
            290,
            { align: "center" }
        );

        doc.setTextColor(0);

    }


    // ================= DOWNLOAD =================

    doc.save(
        "Nexora-Privacy-Policy.pdf"
    );


    // ================= SUCCESS TOAST =================

    if (typeof showToast === "function") {

        showToast(
            "Privacy Policy downloaded successfully!",
            "success"
        );

    }

}


// ================= DOWNLOAD BUTTON LISTENERS =================

const downloadPrivacyBtn =
    document.getElementById(
        "downloadPrivacyBtn"
    );

const mobilePrivacyDownloadBtn =
    document.getElementById(
        "mobileDownloadPrivacyBtn"
    );

if (downloadPrivacyBtn) {

    downloadPrivacyBtn.addEventListener(
        "click",
        downloadPrivacyPolicy
    );

}

if (mobilePrivacyDownloadBtn) {

    mobilePrivacyDownloadBtn.addEventListener(
        "click",
        downloadPrivacyPolicy
    );

}


// ================= DOWNLOAD TERMS AS PDF =================

function downloadTerms() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const margin = 20;

    const pageWidth =
        doc.internal.pageSize.getWidth();

    const textWidth =
        pageWidth - (margin * 2);

    let y = 20;


    // ================= TITLE =================

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(22);

    doc.text(
        "NEXORA",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 12;


    doc.setFontSize(18);

    doc.text(
        "Terms & Conditions",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 10;


    // ================= DATE =================

    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);

    doc.text(
        "Last Updated: August 2026",
        pageWidth / 2,
        y,
        { align: "center" }
    );

    y += 18;


    // ================= CONTENT =================

    const sections = [

        {
            title: "1. Acceptance of Terms",
            text:
                "By accessing or using the Nexora website, you acknowledge that you have read, understood and agreed to these Terms & Conditions. If you do not agree with these terms, please discontinue use of the website."
        },

        {
            title: "2. Use of the Website",
            text:
                "Nexora provides an online shopping environment for gaming, computer and creator-related products. Users are expected to use the website responsibly and only for lawful purposes."
        },

        {
            title: "3. User Accounts",
            text:
                "Some features of Nexora may require an account. Users are responsible for providing accurate information and keeping their login credentials secure."
        },

        {
            title: "4. Products & Product Information",
            text:
                "Nexora aims to display product names, descriptions, images, specifications and prices as accurately as reasonably possible. Product information may be updated or changed without prior notice."
        },

        {
            title: "5. Pricing & Availability",
            text:
                "Product prices and availability may change from time to time. Nexora reserves the right to correct pricing or availability information when an error is identified."
        },

        {
            title: "6. Orders & Purchases",
            text:
                "Adding a product to a shopping cart does not necessarily guarantee its availability or reserve the product. Orders may be subject to confirmation and availability."
        },

        {
            title: "7. Payments",
            text:
                "Where payment functionality is provided, users are responsible for providing accurate payment and billing information. Payment processing may be handled through third-party payment providers."
        },

        {
            title: "8. Returns & Refunds",
            text:
                "Returns, exchanges and refunds may be subject to applicable store policies and conditions. Users should review the relevant return or refund information before completing a purchase."
        },

        {
            title: "9. Intellectual Property",
            text:
                "The Nexora website design, branding, text, graphics and other original content may be protected by applicable intellectual property laws."
        },

        {
            title: "10. Prohibited Activities",
            text:
                "Users should not violate applicable laws, attempt unauthorized access, distribute malicious software, interfere with website operation or submit false or fraudulent information."
        },

        {
            title: "11. Website Availability",
            text:
                "Nexora aims to keep the website available and functional, but uninterrupted access cannot be guaranteed."
        },

        {
            title: "12. Limitation of Liability",
            text:
                "To the extent permitted by applicable law, Nexora is not responsible for losses resulting from circumstances beyond its reasonable control, website interruptions or reliance on inaccurate information."
        },

        {
            title: "13. Changes to These Terms",
            text:
                "Nexora may update these Terms & Conditions from time to time. Updated terms will be published on this page along with a revised update date."
        },

        {
            title: "14. Contact Us",
            text:
                "If you have questions about these Terms & Conditions, please contact the Nexora support team through our Contact page."
        }

    ];


    // ================= WRITE CONTENT =================

    sections.forEach(section => {

        if (y > 255) {

            doc.addPage();

            y = 20;

        }


        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(13);

        doc.text(
            section.title,
            margin,
            y
        );

        y += 8;


        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(10);

        const lines =
            doc.splitTextToSize(
                section.text,
                textWidth
            );


        lines.forEach(line => {

            if (y > 275) {

                doc.addPage();

                y = 20;

            }


            doc.text(
                line,
                margin,
                y
            );

            y += 5;

        });


        y += 8;

    });


    // ================= PDF FOOTER =================

    const totalPages =
        doc.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        doc.setPage(page);

        doc.setFontSize(8);

        doc.setTextColor(120);


        doc.text(
            `Nexora • Terms & Conditions • Page ${page} of ${totalPages}`,
            pageWidth / 2,
            290,
            { align: "center" }
        );


        doc.setTextColor(0);

    }


    // ================= DOWNLOAD =================

    doc.save(
        "Nexora-Terms-and-Conditions.pdf",
    );


    // ================= SUCCESS TOAST =================

    if (typeof showToast === "function") {

        showToast(
            "Terms & Conditions downloaded successfully!",
            "success"
        );

    }

}

// ================= DOWNLOAD BUTTON LISTENERS =================

const downloadTermsBtn =
    document.getElementById(
        "downloadTermsBtn"
    );

const mobileTermsDownloadBtn =
    document.getElementById(
        "mobiledownloadTermsBtn"
    );

if (downloadTermsBtn) {

    downloadTermsBtn.addEventListener(
        "click",
        downloadTerms
    );

}

if (mobileTermsDownloadBtn) {

    mobileTermsDownloadBtn.addEventListener(
        "click",
        downloadTerms
    );

}


// =====================================================
// CONTACT FORM
// =====================================================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById("contactName")
                        ? document.getElementById("contactName").value.trim()
                        : "";

                const email =
                    document.getElementById("contactEmail")
                        ? document.getElementById("contactEmail").value.trim()
                        : "";

                const subject =
                    document.getElementById("contactSubject")
                        ? document.getElementById("contactSubject").value.trim()
                        : "";

                const message =
                    document.getElementById("contactMessage")
                        ? document.getElementById("contactMessage").value.trim()
                        : "";


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    showToast(
                        "Please fill in all fields.",
                        "warning"
                    );

                    return;
                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    showToast(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;
                }


                showToast(
                    "Your message has been sent successfully!",
                    "success"
                );


                contactForm.reset();

            }
        );

    }

// ===================================================== 
// MOBILE MENU 
// ===================================================== 

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu"); 

if (menuBtn && mobileMenu)

        { menuBtn.addEventListener( "click", function ()

        { mobileMenu.classList.toggle("hidden"); 

            const isOpen = !mobileMenu.classList.contains("hidden"); 

            menuBtn.setAttribute( "aria-expanded", isOpen ? "true" : "false" ); 

            if (isOpen) { menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 

            } 

            else { menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'; 

            }
        } 
            
    ); 
        
        // Close menu after clicking a menu link 

        const mobileLinks = mobileMenu.querySelectorAll("a"); 
        
        mobileLinks.forEach(function (link) 
        
        { 
            link.addEventListener( "click", function () 
            
            { mobileMenu.classList.add("hidden"); 
                
                menuBtn.setAttribute( "aria-expanded", "false" );
                
                menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
            } 
        );
    });
}

    // =====================================================
    // NEWSLETTER
    // =====================================================

    const newsletterForm =
        document.getElementById("newsletterForm");

    const newsletterEmail =
        document.getElementById("newsletterEmail");


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    newsletterEmail
                        ? newsletterEmail.value.trim()
                        : "";


                if (email === "") {

                    showToast(
                        "Please enter your email address.",
                        "warning"
                    );

                    return;

                }


                showToast(
                    "🎉 You're subscribed! Welcome to Nexora.",
                    "success"
                );


                newsletterForm.reset();

            }
        );

    }


    // =====================================================
    // =====================================================
    // NEXORA WISHLIST SYSTEM
    // =====================================================
    // =====================================================


    // =====================================================
    // LOAD WISHLIST
    // =====================================================

    let wishlist = [];


    try {

        const savedWishlist =
            localStorage.getItem(
                "nexoraWishlist"
            );


        if (savedWishlist) {

            const parsedWishlist =
                JSON.parse(savedWishlist);


            if (Array.isArray(parsedWishlist)) {

                wishlist = parsedWishlist;

            }

        }

    } catch (error) {

        console.error(
            "Wishlist loading error:",
            error
        );

        wishlist = [];

    }


    // =====================================================
    // WISHLIST ELEMENTS
    // =====================================================

    const wishlistBtn =
        document.getElementById(
            "wishlistBtn"
        );

    const mobileWishlistBtn =
        document.getElementById(
            "mobileWishlistBtn"
        );

    const wishlistSidebar =
        document.getElementById(
            "wishlistSidebar"
        );

    const closeWishlist =
        document.getElementById(
            "closeWishlist"
        );

    const wishlistOverlay =
        document.getElementById(
            "wishlistOverlay"
        );

    const wishlistItems =
        document.getElementById(
            "wishlistItems"
        );


    // =====================================================
    // SAVE WISHLIST
    // =====================================================

    function saveWishlist() {

        try {

            localStorage.setItem(
                "nexoraWishlist",
                JSON.stringify(wishlist)
            );

        } catch (error) {

            console.error(
                "Wishlist saving error:",
                error
            );

        }

    }


    // =====================================================
    // SYNC WISHLIST HEART BUTTONS
    // =====================================================

    function syncWishlistButtons() {

        const wishlistButtons =
            document.querySelectorAll(
                ".wishlist-product"
            );


        wishlistButtons.forEach(
            function (button) {

                const productName =
                    (
                        button.dataset.product ||
                        ""
                    ).trim();


                const exists =
                    wishlist.some(
                        function (item) {

                            return item.name ===
                                productName;

                        }
                    );


                const icon =
                    button.querySelector("i");


                if (exists) {

                    if (icon) {

                        icon.classList.remove(
                            "fa-regular"
                        );

                        icon.classList.add(
                            "fa-solid"
                        );

                    }


                    button.classList.add(
                        "bg-pink-500"
                    );


                    button.setAttribute(
                        "aria-pressed",
                        "true"
                    );

                } else {

                    if (icon) {

                        icon.classList.remove(
                            "fa-solid"
                        );

                        icon.classList.add(
                            "fa-regular"
                        );

                    }


                    button.classList.remove(
                        "bg-pink-500"
                    );


                    button.setAttribute(
                        "aria-pressed",
                        "false"
                    );

                }

            }
        );

    }
        // =====================================================
// RENDER WISHLIST
// =====================================================

function renderWishlist() {

    if (!wishlistItems) return;


    // Update Remove All button visibility
    updateWishlistRemoveControls();


    // =================================================
    // EMPTY WISHLIST
    // =================================================

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

            <div
                class="h-full flex flex-col justify-center items-center text-center">

                <i
                    class="fa-regular fa-heart text-7xl text-pink-400 mb-6">
                </i>

                <h3
                    class="text-2xl font-bold mb-3">

                    Your Wishlist is Empty

                </h3>

                <p
                    class="text-gray-400">

                    Save your favorite gaming products here.

                </p>

            </div>

        `;

        return;

    }


    // =================================================
    // CLEAR OLD ITEMS
    // =================================================

    wishlistItems.innerHTML = "";


    // =================================================
    // CREATE WISHLIST ITEMS
    // =================================================

    wishlist.forEach(
        function (item, index) {

            const wishlistItem =
                document.createElement("div");


            wishlistItem.className =
                "flex gap-4 mb-5 pb-5 border-b border-gray-700";


            wishlistItem.innerHTML = `

                <img
                    src="${item.image || ""}"
                    alt="${item.name}"
                    class="w-20 h-20 rounded-xl object-cover">


                <div class="flex-1 min-w-0">

                    <h4
                        class="font-semibold text-white text-sm">

                        ${item.name}

                    </h4>


                    <p
                        class="text-pink-400 font-bold mt-1">

                        $${Number(item.price || 0).toFixed(2)}

                    </p>


                    <button
                        type="button"
                        class="wishlist-remove mt-3 text-sm text-red-400 hover:text-red-300"
                        data-index="${index}">

                        <i
                            class="fa-solid fa-trash mr-1">
                        </i>

                        Remove

                    </button>

                </div>

            `;


            wishlistItems.appendChild(
                wishlistItem
            );

        }
    );

}

    // =====================================================
    // OPEN WISHLIST
    // =====================================================

    function openWishlist() {

        if (!wishlistSidebar) return;


        wishlistSidebar.classList.remove(
            "translate-x-full"
        );


        if (wishlistOverlay) {

            wishlistOverlay.classList.remove(
                "hidden"
            );

        }

        renderWishlist();

        syncWishlistButtons();

    }
    
      if (mobileWishlistBtn) {
            mobileWishlistBtn.addEventListener("click", function () {
            openWishlist();
    });
}



    // =====================================================
    // CLOSE WISHLIST
    // =====================================================

    function closeWishlistSidebar() {

        if (!wishlistSidebar) return;


        wishlistSidebar.classList.add(
            "translate-x-full"
        );


        if (wishlistOverlay) {

            wishlistOverlay.classList.add(
                "hidden"
            );

        }

    }


    // =====================================================
    // NAVBAR WISHLIST BUTTON
    // =====================================================

    if (wishlistBtn) {

        wishlistBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openWishlist();

            }
        );

    }


    // =====================================================
    // CLOSE WISHLIST BUTTON
    // =====================================================

    if (closeWishlist) {

        closeWishlist.addEventListener(
            "click",
            function () {

                closeWishlistSidebar();

            }
        );

    }


    // =====================================================
    // WISHLIST OVERLAY
    // =====================================================

    if (wishlistOverlay) {

        wishlistOverlay.addEventListener(
            "click",
            function () {

                closeWishlistSidebar();

            }
        );

    }


    // =====================================================
    // PRODUCT WISHLIST HEART
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".wishlist-product"
                );


            if (!button) return;


            event.preventDefault();

            event.stopPropagation();


            const productName =
                (
                    button.dataset.product ||
                    ""
                ).trim();


            const productPrice =
                Number(
                    button.dataset.price
                );


            const productImage =
                button.dataset.image ||
                "";


            // =============================================
            // VALIDATION
            // =============================================

            if (!productName) {

                console.error(
                    "Wishlist error: data-product missing.",
                    button
                );

                return;

            }


            // =============================================
            // FIND PRODUCT
            // =============================================

            const existingIndex =
                wishlist.findIndex(
                    function (item) {

                        return item.name ===
                            productName;

                    }
                );


            // =============================================
            // REMOVE FROM WISHLIST
            // =============================================

            if (existingIndex !== -1) {

                wishlist.splice(
                    existingIndex,
                    1
                );


                showToast(
                    `${productName} removed from wishlist.`,
                    "info"
                );

            }


            // =============================================
            // ADD TO WISHLIST
            // =============================================

            else {

                wishlist.push({

                    name: productName,

                    price:
                        Number.isNaN(productPrice)
                            ? 0
                            : productPrice,

                    image: productImage

                });


                showToast(
                    `${productName} added to wishlist!`,
                    "success"
                );

            }


            // =============================================
            // SAVE + UPDATE
            // =============================================

            saveWishlist();

            renderWishlist();

            syncWishlistButtons();

        }
    );


    // =====================================================
    // WISHLIST SIDEBAR REMOVE
    // =====================================================

    if (wishlistItems) {

        wishlistItems.addEventListener(
            "click",
            function (event) {

                const removeButton =
                    event.target.closest(
                        ".wishlist-remove"
                    );


                if (!removeButton) return;


                const index =
                    Number(
                        removeButton.dataset.index
                    );


                if (
                    Number.isNaN(index) ||
                    !wishlist[index]
                ) {

                    return;

                }


                const removedProduct =
                    wishlist[index].name;


                wishlist.splice(
                    index,
                    1
                );


                saveWishlist();

                renderWishlist();

                syncWishlistButtons();


                showToast(
                    `${removedProduct} removed from wishlist.`,
                    "info"
                );

            }
        );

    }

// =====================================================
// WISHLIST REMOVE ALL
// =====================================================

const wishlistRemoveControls =
    document.getElementById("wishlistRemoveControls");

const removeAllWishlistBtn =
    document.getElementById("removeAllWishlistBtn");


// =====================================================
// SHOW / HIDE REMOVE ALL BUTTON
// =====================================================

function updateWishlistRemoveControls() {

    if (!wishlistRemoveControls) {
        return;
    }

    if (wishlist.length > 0) {

        wishlistRemoveControls.classList.remove("hidden");

    } else {

        wishlistRemoveControls.classList.add("hidden");

    }

}


// =====================================================
// CUSTOM REMOVE ALL CONFIRMATION
// =====================================================

function showRemoveAllConfirmation() {

    const toastContainer =
        document.getElementById("toastContainer");

    if (!toastContainer) {
        return;
    }


    // Prevent duplicate confirmation
    const existingConfirmation =
        document.getElementById(
            "removeAllConfirmation"
        );

    if (existingConfirmation) {
        return;
    }


    const confirmation =
        document.createElement("div");

    confirmation.id =
        "removeAllConfirmation";


    confirmation.className = `
        pointer-events-auto
        bg-[#121826]
        border
        border-red-400
        rounded-xl
        px-5
        py-4
        shadow-2xl
        flex
        flex-col
        gap-4
        text-white
        transform
        -translate-y-10
        opacity-0
        transition-all
        duration-300
        w-[calc(100vw-2rem)]
        max-w-md
    `;


    confirmation.innerHTML = `
        <div class="flex items-start gap-3">

            <i
                class="fa-solid fa-triangle-exclamation
                text-red-400 text-xl mt-0.5">
            </i>

            <div class="flex-1">

                <p class="text-sm font-semibold text-white">
                    Remove all wishlist items?
                </p>

                <p class="text-xs text-gray-400 mt-1">
                    Are you sure you want to remove all items
                    from your wishlist?
                </p>

            </div>

        </div>


        <div class="flex justify-end gap-3">

            <button
                id="cancelRemoveAll"
                type="button"
                class="
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-semibold
                    text-gray-300
                    border
                    border-gray-600
                    hover:bg-gray-700
                    transition
                    duration-300
                ">
                Cancel
            </button>


            <button
                id="confirmRemoveAll"
                type="button"
                class="
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-semibold
                    text-white
                    bg-red-500
                    hover:bg-red-400
                    transition
                    duration-300
                    shadow-lg
                    shadow-red-500/20
                ">
                Remove All
            </button>

        </div>
    `;


    toastContainer.appendChild(
        confirmation
    );


    // =================================================
    // SHOW ANIMATION
    // =================================================

    requestAnimationFrame(function () {

        confirmation.classList.remove(
            "-translate-y-10",
            "opacity-0"
        );

    });


    // =================================================
    // CLOSE CONFIRMATION
    // =================================================

    function closeConfirmation() {

        confirmation.classList.add(
            "-translate-y-10",
            "opacity-0"
        );


        setTimeout(function () {

            confirmation.remove();

        }, 300);

    }


    // =================================================
    // CANCEL
    // =================================================

    const cancelButton =
        document.getElementById(
            "cancelRemoveAll"
        );

    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            function () {

                closeConfirmation();

            }
        );

    }


    // =================================================
    // CONFIRM REMOVE ALL
    // =================================================

    const confirmButton =
        document.getElementById(
            "confirmRemoveAll"
        );

    if (confirmButton) {

        confirmButton.addEventListener(
            "click",
            function () {

                // Remove all products
                wishlist = [];


                // Save empty wishlist
                saveWishlist();


                // Update wishlist UI
                renderWishlist();


                // Reset product heart buttons
                syncWishlistButtons();


                // Hide Remove All button
                updateWishlistRemoveControls();


                // Close confirmation
                closeConfirmation();


                // Success toast
                showToast(
                    "All items have been removed from your wishlist.",
                    "success"
                );

            }
        );

    }

}


// =====================================================
// REMOVE ALL BUTTON CLICK
// =====================================================

if (removeAllWishlistBtn) {

    removeAllWishlistBtn.addEventListener(
        "click",
        function () {

            // Wishlist already empty
            if (wishlist.length === 0) {

                showToast(
                    "Your wishlist is already empty.",
                    "info"
                );

                updateWishlistRemoveControls();

                return;

            }


            // Show custom confirmation
            showRemoveAllConfirmation();

        }
    );

}


// =====================================================
// INITIAL REMOVE ALL BUTTON STATE
// =====================================================

updateWishlistRemoveControls();

    // =====================================================
    // =====================================================
    // NEXORA SHOPPING CART SYSTEM
    // =====================================================
    // =====================================================


    // =====================================================
    // LOAD CART
    // =====================================================

    let cart = [];


    try {

        const savedCart =
            localStorage.getItem(
                "nexoraCart"
            );


        if (savedCart) {

            const parsedCart =
                JSON.parse(savedCart);


            if (Array.isArray(parsedCart)) {

                cart = parsedCart;

            }

        }

    } catch (error) {

        console.error(
            "Cart loading error:",
            error
        );

        cart = [];

    }


    // =====================================================
    // CART ELEMENTS
    // =====================================================

    const cartSidebar =
        document.getElementById(
            "cartSidebar"
        );

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );

    const closeCart =
        document.getElementById(
            "closeCart"
        );

    const cartOverlay =
        document.getElementById(
            "cartOverlay"
        );


    // =====================================================
    // NAVBAR CART BUTTON
    // =====================================================

    const cartBtn =
        document.getElementById("cartBtn") ||
        document.getElementById("shoppingCartBtn") ||
        document.getElementById("cartButton");

    const mobileCartBtn =
        document.getElementById("mobileCartBtn");

    if (mobileCartBtn) {
        mobileCartBtn.addEventListener("click", function () {
        openCart();
    });
}


    // =====================================================
    // CART BADGE
    // =====================================================

    const cartBadge =
        document.getElementById("cartCount") ||
        document.getElementById("cartBadge") ||
        document.getElementById("cartItemCount");   
    const mobileCartCount =
        document.getElementById("mobileCartCount");


    // =====================================================
    // SAVE CART
    // =====================================================

    function saveCart() {

        try {

            localStorage.setItem(
                "nexoraCart",
                JSON.stringify(cart)
            );

        } catch (error) {

            console.error(
                "Cart saving error:",
                error
            );

        }

    }


    // =====================================================
    // GET TOTAL CART QUANTITY
    // =====================================================

    function getCartItemCount() {

        return cart.reduce(
            function (total, item) {

                const quantity =
                    Number(item.quantity) || 0;


                return total + quantity;

            },
            0
        );

    }


    // =====================================================
    // UPDATE CART BADGE
    // =====================================================

    function updateCartBadge() {
    const count = getCartItemCount();

    if (cartBadge) {
        cartBadge.textContent = count;
        cartBadge.classList.remove("hidden");
    }

    if (mobileCartCount) {
        mobileCartCount.textContent = count;
        mobileCartCount.classList.remove("hidden");
    }
}


    // =====================================================
    // CALCULATE CART TOTAL
    // =====================================================

    function calculateCartTotal() {

        return cart.reduce(
            function (total, item) {

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 0;


                return total +
                    (price * quantity);

            },
            0
        );

    }


    // =====================================================
    // OPEN CART
    // =====================================================

    function openCart() {

        if (!cartSidebar) return;


        cartSidebar.classList.remove(
            "translate-x-full"
        );


        if (cartOverlay) {

            cartOverlay.classList.remove(
                "hidden"
            );

        }


        renderCart();

        updateCartBadge();

    }


    // =====================================================
    // CLOSE CART
    // =====================================================

    function closeCartSidebar() {

        if (!cartSidebar) return;


        cartSidebar.classList.add(
            "translate-x-full"
        );


        if (cartOverlay) {

            cartOverlay.classList.add(
                "hidden"
            );

        }

    }


    // =====================================================
    // RENDER CART
    // =====================================================

    function renderCart() {

        if (!cartItems) {

            updateCartBadge();

            return;

        }


        // =================================================
        // EMPTY CART
        // =================================================

        if (cart.length === 0) {

            cartItems.innerHTML = `

                <div
                    class="h-full flex flex-col justify-center items-center text-center">

                    <i
                        class="fa-solid fa-cart-shopping text-7xl text-cyan-400 mb-6">
                    </i>

                    <h3
                        class="text-2xl font-bold mb-3">

                        Your Cart is Empty

                    </h3>

                    <p
                        class="text-gray-400">

                        Add your favorite gaming products to the cart.

                    </p>

                </div>

            `;


            if (cartTotal) {

                cartTotal.textContent =
                    "$0.00";

            }


            updateCartBadge();

            return;

        }


        // =================================================
        // CLEAR OLD CART
        // =================================================

        cartItems.innerHTML = "";


        // =================================================
        // CREATE CART ITEMS
        // =================================================

        cart.forEach(
            function (item, index) {

                const cartItem =
                    document.createElement("div");


                cartItem.className =
                    "flex gap-4 mb-5 pb-5 border-b border-gray-700";


                cartItem.innerHTML = `

                    <!-- PRODUCT IMAGE -->

                    <img
                        src="${item.image || ""}"
                        alt="${item.name}"
                        class="w-20 h-20 rounded-xl object-cover shrink-0">


                    <!-- PRODUCT DETAILS -->

                    <div class="flex-1 min-w-0">

                        <h4
                            class="font-semibold text-white text-sm leading-snug">

                            ${item.name}

                        </h4>


                        <!-- PRICE -->

                        <p
                            class="text-cyan-400 font-bold mt-1">

                            $${Number(item.price || 0).toFixed(2)}

                        </p>


                        <!-- QUANTITY CONTROLS -->

                        <div
                            class="flex items-center gap-2 mt-3">


                            <!-- DECREASE -->

                            <button
                                type="button"
                                class="cart-quantity-btn w-8 h-8 rounded-lg bg-gray-800 hover:bg-cyan-500 hover:text-black transition font-bold"
                                data-index="${index}"
                                data-action="decrease">

                                −

                            </button>


                            <!-- QUANTITY -->

                            <span
                                class="w-8 text-center font-semibold">

                                ${Number(item.quantity) || 0}

                            </span>


                            <!-- INCREASE -->

                            <button
                                type="button"
                                class="cart-quantity-btn w-8 h-8 rounded-lg bg-gray-800 hover:bg-cyan-500 hover:text-black transition font-bold"
                                data-index="${index}"
                                data-action="increase">

                                +

                            </button>


                            <!-- REMOVE -->

                            <button
                                type="button"
                                class="cart-remove ml-auto text-red-400 hover:text-red-300 transition"
                                data-index="${index}"
                                title="Remove product">

                                <i
                                    class="fa-solid fa-trash">
                                </i>

                            </button>

                        </div>

                    </div>

                `;


                cartItems.appendChild(
                    cartItem
                );

            }
        );


        // =================================================
        // UPDATE TOTAL
        // =================================================

        const total =
            calculateCartTotal();


        if (cartTotal) {

            cartTotal.textContent =
                `$${total.toFixed(2)}`;

        }


        // =================================================
        // UPDATE BADGE
        // =================================================

        updateCartBadge();

    }


    // =====================================================
    // ADD PRODUCT TO CART
    // =====================================================

    function addToCart(
        productName,
        productPrice,
        productImage
    ) {

        // =================================================
        // VALIDATION
        // =================================================

        if (!productName) {

            console.error(
                "Cart error: data-product missing."
            );

            return;

        }


        const price =
            Number(productPrice);


        if (
            Number.isNaN(price) ||
            price < 0
        ) {

            console.error(
                "Cart error: Invalid product price.",
                productPrice
            );

            return;

        }


        // =================================================
        // FIND EXISTING PRODUCT
        // =================================================

        const existingProduct =
            cart.find(
                function (item) {

                    return item.name ===
                        productName;

                }
            );


        // =================================================
        // INCREASE EXISTING PRODUCT
        // =================================================

        if (existingProduct) {

            existingProduct.quantity =
                (Number(existingProduct.quantity) || 0) + 1;


            showToast(
                `${productName} quantity increased.`,
                "success"
            );

        }


        // =================================================
        // ADD NEW PRODUCT
        // =================================================

        else {

            cart.push({

                name:
                    productName,

                price:
                    price,

                image:
                    productImage || "",

                quantity:
                    1

            });


            showToast(
                `${productName} added to cart!`,
                "success"
            );

        }


        // =================================================
        // SAVE CART
        // =================================================

        saveCart();


        // =================================================
        // UPDATE CART UI
        // =================================================

        renderCart();

        updateCartBadge();


        // =================================================
        // OPEN CART
        // =================================================

       renderCart();

}

    // =====================================================
    // ADD TO CART BUTTONS
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".add-to-cart"
                );


            if (!button) return;


            event.preventDefault();

            event.stopPropagation();


            const productName =
                (
                    button.dataset.product ||
                    ""
                ).trim();


            const productPrice =
                button.dataset.price;


            const productImage =
                button.dataset.image ||
                "";


            addToCart(
                productName,
                productPrice,
                productImage
            );

        }
    );


    // =====================================================
    // CART QUANTITY + / -
    // =====================================================

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

                const quantityButton =
                    event.target.closest(
                        ".cart-quantity-btn"
                    );


                if (!quantityButton) return;


                const index =
                    Number(
                        quantityButton.dataset.index
                    );


                const action =
                    quantityButton.dataset.action;


                if (
                    Number.isNaN(index) ||
                    !cart[index]
                ) {

                    return;

                }


                // =========================================
                // DECREASE
                // =========================================

                if (action === "decrease") {

                    cart[index].quantity =
                        (Number(cart[index].quantity) || 0) - 1;


                    // Remove when quantity reaches zero

                    if (
                        cart[index].quantity <= 0
                    ) {

                        cart.splice(
                            index,
                            1
                        );

                    }

                }


                // =========================================
                // INCREASE
                // =========================================

                else if (
                    action === "increase"
                ) {

                    cart[index].quantity =
                        (Number(cart[index].quantity) || 0) + 1;

                }


                // =========================================
                // SAVE + UPDATE
                // =========================================

                saveCart();

                renderCart();

                updateCartBadge();

            }
        );

    }


    // =====================================================
    // REMOVE PRODUCT FROM CART
    // =====================================================

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

                const removeButton =
                    event.target.closest(
                        ".cart-remove"
                    );


                if (!removeButton) return;


                const index =
                    Number(
                        removeButton.dataset.index
                    );


                if (
                    Number.isNaN(index) ||
                    !cart[index]
                ) {

                    return;

                }


                const removedProduct =
                    cart[index].name;


                cart.splice(
                    index,
                    1
                );


                saveCart();

                renderCart();

                updateCartBadge();


                showToast(
                    `${removedProduct} removed from cart.`,
                    "info"
                );

            }
        );

    }


// =================================================
// NAVBAR CART BUTTON
// =================================================

if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            openCart();

        }
    );

}


// =================================================
// CLOSE CART BUTTON
// =================================================

if (closeCart) {

    closeCart.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeCartSidebar();

        }
    );

}


// =================================================
// CART OVERLAY
// =================================================

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        function () {

            closeCartSidebar();

        }
    );

}


// =================================================
// ESC KEY
// =================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCartSidebar();

        }

    }
);    

// =====================================================
// INITIAL CART UI
// =====================================================

    renderCart();

    updateCartBadge();


// =====================================================
// NEXORA CHECKOUT SYSTEM
// =====================================================

const proceedtoCheckoutBtn =
    document.getElementById("proceedtoCheckoutBtn");

// =====================================================
// PROCESS CHECKOUT
// =====================================================

function proceedToCheckout() {

// =================================================
// CHECK EMPTY CART
// =================================================

    if (!cart || cart.length === 0) {

        showToast(
            "Your cart is empty. Please add products first.",
            "warning"
        );

        return;
    }


// =================================================
// CHECK LOGIN STATUS
// =================================================

    const loggedIn =
        localStorage.getItem("nexoraLoggedIn");


// =================================================
// LOGIN REQUIRED
// =================================================

if (loggedIn !== "true") {

    showToast(
        "Please login to continue to checkout.",
        "warning"
    );


    // OPEN AUTH OVERLAY

    if (authOverlay) {

        authOverlay.classList.remove(
            "hidden"
        );


        // SHOW LOGIN MODAL ONLY

        if (registerModal) {

            registerModal.classList.add(
                "hidden"
            );

        }


        if (profileModal) {

            profileModal.classList.add(
                "hidden"
            );

        }


        if (loginModal) {

            loginModal.classList.remove(
                "hidden"
            );

        }

    }

    return;
}

// =================================================
// CALCULATE FINAL TOTAL
// =================================================

    const finalTotal =
        calculateCartTotal();


// =================================================
// VALIDATE TOTAL
// =================================================

    if (
        !Number.isFinite(finalTotal) ||
        finalTotal <= 0
    ) {

        showToast(
            "Unable to process checkout. Please try again.",
            "error"
        );

        return;
    }


// =================================================
// CLEAR CART
// =================================================

    cart.length = 0;


// =================================================
// REMOVE CART FROM LOCAL STORAGE
// =================================================

    localStorage.removeItem(
        "nexoraCart"
    );


// =================================================
// UPDATE CART UI
// =================================================

    renderCart();


// =================================================
// UPDATE CART BADGE
// =================================================

    updateCartBadge();


// =================================================
// CLOSE CART
// =================================================

    closeCartSidebar();


// =================================================
// SUCCESS TOAST
// =================================================

    showToast(
        `Your checkout of $${finalTotal.toFixed(2)} has been successfully completed!`,
        "success"
    );

}

// =====================================================
// CHECKOUT BUTTON EVENT
// =====================================================

if (proceedtoCheckoutBtn) {

    proceedtoCheckoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            proceedToCheckout();

        }
    );

}
   
// =====================================================
// NEXORA SEARCH + VIEW ALL PRODUCTS SYSTEM
// =====================================================

// =====================================================
// SEARCH ELEMENTS
// =====================================================

const searchInput =
    document.getElementById("productSearch");

const mobileSearchBtn =
    document.getElementById("mobileSearchBtn");

const mobileSearchBar =
    document.getElementById("mobileSearchBar");

const mobileSearchInput =
    document.getElementById("mobileSearchInput");


// =====================================================
// PRODUCT ELEMENTS
// =====================================================

const productGrid =
    document.getElementById("productGrid");

const viewAllBtn =
    document.getElementById("viewAllBtn");

const viewAllText =
    document.getElementById("viewAllText");

const viewAllIcon =
    document.getElementById("viewAllIcon");

const allProducts =
    productGrid
        ? productGrid.querySelectorAll(".product-card")
        : [];

const extraProducts =
    productGrid
        ? productGrid.querySelectorAll(".extra-product")
        : [];

let productsExpanded = false;


// =====================================================
// GET ACTIVE SEARCH TERM
// =====================================================

function getActiveSearchTerm() {

    // Mobile search
    if (
        mobileSearchInput &&
        mobileSearchInput.value.trim() !== ""
    ) {

        return mobileSearchInput.value
            .trim()
            .toLowerCase();

    }


    // Desktop search
    if (searchInput) {

        return searchInput.value
            .trim()
            .toLowerCase();

    }


    return "";

}


// =====================================================
// FILTER PRODUCTS
// =====================================================

function filterProducts() {

    const searchTerm =
        getActiveSearchTerm();

    let visibleProducts = 0;


    allProducts.forEach(function (product) {

        const productName =
            (
                product.getAttribute("data-name") || ""
            ).toLowerCase();

        const productCategory =
            (
                product.getAttribute("data-category") || ""
            ).toLowerCase();

        const productText =
            (
                product.textContent || ""
            ).toLowerCase();


        const matchesSearch =
            searchTerm === "" ||
            productName.includes(searchTerm) ||
            productCategory.includes(searchTerm) ||
            productText.includes(searchTerm);


        // =================================================
        // SEARCH ACTIVE
        // =================================================

        if (searchTerm !== "") {

            if (matchesSearch) {

                product.classList.remove("hidden");

                visibleProducts++;

            }

            else {

                product.classList.add("hidden");

            }

        }


        // =================================================
        // SEARCH EMPTY
        // =================================================

        else {

            const isExtraProduct =
                product.classList.contains("extra-product");


            if (
                !isExtraProduct ||
                productsExpanded
            ) {

                product.classList.remove("hidden");

                visibleProducts++;

            }

            else {

                product.classList.add("hidden");

            }

        }

    });


    // =====================================================
    // NO RESULTS MESSAGE
    // =====================================================

    let noResultsMessage =
        document.getElementById("noSearchResults");


    if (
        searchTerm !== "" &&
        visibleProducts === 0
    ) {

        if (!noResultsMessage) {

            noResultsMessage =
                document.createElement("div");

            noResultsMessage.id =
                "noSearchResults";

            noResultsMessage.className =
                "col-span-full text-center py-16";


            noResultsMessage.innerHTML = `

                <i
                    class="fa-solid fa-magnifying-glass
                    text-5xl
                    text-cyan-400
                    mb-5">
                </i>

                <h3
                    class="text-2xl
                    font-bold
                    text-white
                    mb-2">

                    No Products Found

                </h3>

                <p
                    class="text-gray-400">

                    Try searching for another product.

                </p>

            `;


            if (productGrid) {

                productGrid.appendChild(
                    noResultsMessage
                );

            }

        }

    }

    else {

        if (noResultsMessage) {

            noResultsMessage.remove();

        }

    }

}


// =====================================================
// DESKTOP SEARCH
// =====================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            // Sync mobile search
            if (mobileSearchInput) {

                mobileSearchInput.value =
                    searchInput.value;

            }

            filterProducts();

        }
    );

}


// =====================================================
// MOBILE SEARCH BUTTON
// =====================================================

if (
    mobileSearchBtn &&
    mobileSearchBar &&
    mobileSearchInput
) {

    mobileSearchBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            // Open / close search bar
            mobileSearchBar.classList.toggle(
                "hidden"
            );


            // Focus mobile input
            if (
                !mobileSearchBar.classList.contains(
                    "hidden"
                )
            ) {

                setTimeout(
                    function () {

                        mobileSearchInput.focus();

                    },
                    100
                );

            }

        }
    );

}


// =====================================================
// MOBILE SEARCH INPUT
// =====================================================

if (mobileSearchInput) {

    mobileSearchInput.addEventListener(
        "input",
        function () {

            // Sync desktop search
            if (searchInput) {

                searchInput.value =
                    mobileSearchInput.value;

            }


            // Filter immediately while typing
            filterProducts();

        }
    );

}


// =====================================================
// MOBILE SEARCH ENTER KEY
// =====================================================

if (mobileSearchInput) {

    mobileSearchInput.addEventListener(
        "keydown",
        function (event) {

            // =========================================
            // ENTER
            // =========================================

            if (event.key === "Enter") {

                event.preventDefault();
                event.stopPropagation();


                // Sync desktop search
                if (searchInput) {

                    searchInput.value =
                        mobileSearchInput.value;

                }


                // Apply search
                filterProducts();


                // Remove keyboard
                mobileSearchInput.blur();

            }


            // =========================================
            // ESCAPE
            // =========================================

            if (event.key === "Escape") {

                event.preventDefault();


                mobileSearchInput.value = "";


                if (searchInput) {

                    searchInput.value = "";

                }


                filterProducts();


                mobileSearchInput.blur();


                if (mobileSearchBar) {

                    mobileSearchBar.classList.add(
                        "hidden"
                    );

                }

            }

        }
    );

}


// =====================================================
// INITIAL PRODUCT STATE
// =====================================================

filterProducts();


// =====================================================
// VIEW ALL PRODUCTS BUTTON
// =====================================================

if (viewAllBtn) {

    viewAllBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            productsExpanded =
                !productsExpanded;

            // =========================================
            // SHOW ALL PRODUCTS
            // =========================================

            if (productsExpanded) {

                if (viewAllText) {

                    viewAllText.textContent =
                        "Show Less Products";

                }

                if (viewAllIcon) {

                    viewAllIcon.classList.add(
                        "rotate-180"
                    );

                }

            }

            // =========================================
            // SHOW LESS PRODUCTS
            // =========================================

            else {

                if (viewAllText) {

                    viewAllText.textContent =
                        "View All Products";

                }

                if (viewAllIcon) {

                    viewAllIcon.classList.remove(
                        "rotate-180"
                    );

                }

            }

            // =========================================
            // APPLY PRODUCT FILTER
            // =========================================

            filterProducts();

            // =========================================
            // SCROLL BACK WHEN COLLAPSED
            // =========================================

            if (!productsExpanded) {

                viewAllBtn.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }
    );

}

// =====================================================
// NEXORA AUTHENTICATION SYSTEM
// =====================================================

// =====================================================
// ELEMENTS
// =====================================================

const loginBtn =
    document.getElementById("loginBtn");

const mobileLoginBtn =
    document.getElementById("mobileLoginBtn");    

const authOverlay =
    document.getElementById("authOverlay");

const loginModal =
    document.getElementById("loginModal");

const registerModal =
    document.getElementById("registerModal");

const profileModal =
    document.getElementById("profileModal");

const closeAuth =
    document.getElementById("closeAuth");

const closeRegister =
    document.getElementById("closeRegister");

const closeProfile =
    document.getElementById("closeProfile");

const showRegister =
    document.getElementById("showRegister");

const showLogin =
    document.getElementById("showLogin");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const saveProfileBtn =
    document.getElementById("saveProfileBtn");

const logoutBtn =
    document.getElementById("logoutBtn");


// =====================================================
// OPEN LOGIN / PROFILE
// =====================================================

function openAuthModal(event) {

    if (event) {
        event.preventDefault();
    }

    const loggedIn =
        localStorage.getItem("nexoraLoggedIn");


    // =================================================
    // USER IS ALREADY LOGGED IN
    // =================================================

    if (loggedIn === "true") {

        let currentUser = null;

        try {

            currentUser =
                JSON.parse(
                    localStorage.getItem(
                        "nexoraCurrentUser"
                    )
                );

        } catch (error) {

            currentUser = null;

        }


        if (
            currentUser &&
            authOverlay &&
            profileModal
        ) {

            authOverlay.classList.remove("hidden");

            if (loginModal) {
                loginModal.classList.add("hidden");
            }

            if (registerModal) {
                registerModal.classList.add("hidden");
            }

            profileModal.classList.remove("hidden");


            if (profileName) {
                profileName.value =
                    currentUser.name || "";
            }


            if (profileEmail) {
                profileEmail.value =
                    currentUser.email || "";
            }

        }

        return;

    }


    // =================================================
    // USER IS NOT LOGGED IN
    // =================================================

    if (!authOverlay || !loginModal) {
        return;
    }


    authOverlay.classList.remove("hidden");

    loginModal.classList.remove("hidden");


    if (registerModal) {
        registerModal.classList.add("hidden");
    }


    if (profileModal) {
        profileModal.classList.add("hidden");
    }

}


// =====================================================
// DESKTOP LOGIN BUTTON
// =====================================================

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        openAuthModal
    );

}


// =====================================================
// MOBILE LOGIN BUTTON
// =====================================================

if (mobileLoginBtn) {

    mobileLoginBtn.addEventListener(
        "click",
        function (event) {

            openAuthModal(event);


            // Close mobile menu
            const mobileMenu =
                document.getElementById(
                    "mobileMenu"
                );

            if (mobileMenu) {
                mobileMenu.classList.add("hidden");
            }


            // Reset hamburger state
            const menuBtn =
                document.getElementById(
                    "menuBtn"
                );

            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );
 }

 // CLOSE LOGIN MODAL
if (closeAuth) {
    closeAuth.addEventListener("click", function () {
        if (authOverlay) {
            authOverlay.classList.add("hidden");
        }

        if (loginModal) {
            loginModal.classList.add("hidden");
        }
    });
}

// =====================================================
// CLOSE REGISTER
// =====================================================

if (closeRegister && authOverlay) {

    closeRegister.addEventListener(
        "click",
        function () {

            authOverlay.classList.add("hidden");

        }
    );

}


// =====================================================
// CLOSE PROFILE
// =====================================================

if (closeProfile && authOverlay) {

    closeProfile.addEventListener(
        "click",
        function () {

            authOverlay.classList.add("hidden");

        }
    );

}


// =====================================================
// SHOW REGISTER
// =====================================================

if (showRegister && loginModal && registerModal) {

    showRegister.addEventListener(
        "click",
        function () {

            loginModal.classList.add("hidden");

            registerModal.classList.remove("hidden");

            if (profileModal) {

                profileModal.classList.add("hidden");

            }

        }
    );

}


// =====================================================
// SHOW LOGIN
// =====================================================

if (showLogin && loginModal && registerModal) {

    showLogin.addEventListener(
        "click",
        function () {

            registerModal.classList.add("hidden");

            loginModal.classList.remove("hidden");

            if (profileModal) {

                profileModal.classList.add("hidden");

            }

        }
    );

}


// =====================================================
// OUTSIDE CLICK
// =====================================================

if (authOverlay) {

    authOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === authOverlay) {

                authOverlay.classList.add("hidden");

            }

        }
    );

}


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            authOverlay
        ) {

            authOverlay.classList.add("hidden");

        }

    }
);


// =====================================================
// REGISTER SYSTEM
// =====================================================

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("registerName")
                    ? document.getElementById("registerName").value.trim()
                    : "";


            const email =
                document.getElementById("registerEmail")
                    ? document.getElementById("registerEmail").value.trim().toLowerCase()
                    : "";


            const password =
                document.getElementById("registerPassword")
                    ? document.getElementById("registerPassword").value
                    : "";


            const confirmPassword =
                document.getElementById("registerConfirmPassword")
                    ? document.getElementById("registerConfirmPassword").value
                    : "";


            // =========================================
            // EMPTY FIELDS
            // =========================================

            if (
                !name ||
                !email ||
                !password ||
                !confirmPassword
            ) {

                showToast(
                    "Please fill in all fields.",
                    "warning"
                );

                return;

            }


            // =========================================
            // EMAIL VALIDATION
            // =========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                showToast(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            // =========================================
            // PASSWORD LENGTH
            // =========================================

            if (password.length < 8) {

                showToast(
                    "Password must be at least 8 characters.",
                    "warning"
                );

                return;

            }


            // =========================================
            // PASSWORD MATCH
            // =========================================

            if (password !== confirmPassword) {

                showToast(
                    "Passwords do not match.",
                    "error"
                );

                return;

            }


            // =========================================
            // CHECK EXISTING ACCOUNT
            // =========================================

            let existingUser = null;


            try {

                existingUser =
                    JSON.parse(
                        localStorage.getItem("nexoraUser")
                    );

            } catch (error) {

                existingUser = null;

            }


            if (
                existingUser &&
                existingUser.email === email
            ) {

                showToast(
                    "An account with this email already exists.",
                    "warning"
                );

                return;

            }


            // =========================================
            // CREATE USER
            // =========================================

            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                "nexoraUser",
                JSON.stringify(user)
            );


            // =========================================
            // SUCCESS
            // =========================================

            showToast(
                "Account created successfully!",
                "success"
            );


            registerForm.reset();


            // =========================================
            // OPEN LOGIN
            // =========================================

            setTimeout(
                function () {

                    if (registerModal) {

                        registerModal.classList.add("hidden");

                    }

                    if (loginModal) {

                        loginModal.classList.remove("hidden");

                    }


                    const loginEmail =
                        document.getElementById("loginEmail");


                    if (loginEmail) {

                        loginEmail.value = email;

                    }

                },
                1200
            );

        }
    );

}


// =====================================================
// LOGIN SYSTEM
// =====================================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail")
                    ? document.getElementById("loginEmail").value.trim().toLowerCase()
                    : "";


            const password =
                document.getElementById("loginPassword")
                    ? document.getElementById("loginPassword").value
                    : "";


            // =========================================
            // EMPTY EMAIL
            // =========================================

            if (!email) {

                showToast(
                    "Please enter your email address.",
                    "warning"
                );

                return;

            }


            // =========================================
            // EMAIL VALIDATION
            // =========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                showToast(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            // =========================================
            // EMPTY PASSWORD
            // =========================================

            if (!password) {

                showToast(
                    "Please enter your password.",
                    "warning"
                );

                return;

            }


            // =========================================
            // GET REGISTERED USER
            // =========================================

            let savedUser = null;


            try {

                savedUser =
                    JSON.parse(
                        localStorage.getItem("nexoraUser")
                    );

            } catch (error) {

                savedUser = null;

            }


            // =========================================
            // NO ACCOUNT
            // =========================================

            if (!savedUser) {

                showToast(
                    "Please register first to continue.",
                    "warning"
                );

                return;

            }


            // =========================================
            // WRONG CREDENTIALS
            // =========================================

            if (
                email !== savedUser.email ||
                password !== savedUser.password
            ) {

                showToast(
                    "Invalid email or password.",
                    "error"
                );

                return;

            }


            // =========================================
            // LOGIN SUCCESS
            // =========================================

            localStorage.setItem(
                "nexoraLoggedIn",
                "true"
            );


            localStorage.setItem(
                "nexoraCurrentUser",
                JSON.stringify(savedUser)
            );


            showToast(
                `Welcome back, ${savedUser.name}!`,
                "success"
            );


            // =========================================
            // CLOSE MODAL
            // =========================================

            setTimeout(
                function () {

                    if (authOverlay) {

                        authOverlay.classList.add("hidden");

                    }

                    loginForm.reset();

                    updateLoginButton();

                },
                1200
            );

        }
    );

}


// =====================================================
// EDIT PROFILE
// =====================================================

if (saveProfileBtn) {

    saveProfileBtn.addEventListener(
        "click",
        function () {

            const newName =
                profileName
                    ? profileName.value.trim()
                    : "";


            // =========================================
            // VALIDATE NAME
            // =========================================

            if (!newName) {

                showToast(
                    "Please enter your name.",
                    "warning"
                );

                return;

            }


            if (newName.length < 2) {

                showToast(
                    "Name must be at least 2 characters.",
                    "warning"
                );

                return;

            }


            // =========================================
            // GET USER
            // =========================================

            let user = null;


            try {

                user =
                    JSON.parse(
                        localStorage.getItem(
                            "nexoraUser"
                        )
                    );

            } catch (error) {

                user = null;

            }


            if (!user) {

                showToast(
                    "User account not found.",
                    "error"
                );

                return;

            }


            // =========================================
            // UPDATE NAME
            // =========================================

            user.name = newName;


            // =========================================
            // SAVE MAIN USER
            // =========================================

            localStorage.setItem(
                "nexoraUser",
                JSON.stringify(user)
            );


            // =========================================
            // UPDATE CURRENT USER
            // =========================================

            localStorage.setItem(
                "nexoraCurrentUser",
                JSON.stringify(user)
            );


            // =========================================
            // UPDATE NAVBAR
            // =========================================

            updateLoginButton();


            // =========================================
            // SUCCESS
            // =========================================

            showToast(
                "Profile updated successfully!",
                "success"
            );


            // =========================================
            // CLOSE PROFILE
            // =========================================

            setTimeout(
                function () {

                    if (authOverlay) {

                        authOverlay.classList.add("hidden");

                    }

                },
                1000
            );

        }
    );

}


// =====================================================
// LOGOUT SYSTEM
// =====================================================

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

// =========================================
// REMOVE LOGIN SESSION
// =========================================

localStorage.removeItem(
    "nexoraLoggedIn"
);


localStorage.removeItem(
    "nexoraCurrentUser"
);


// =========================================
// CLOSE MODAL
// =========================================

if (authOverlay) {

    authOverlay.classList.add("hidden");

    }


// =========================================
// RESET NAVBAR
// =========================================

updateLoginButton();


// =========================================
// SUCCESS TOAST
// =========================================

showToast(
    "You have been logged out successfully.",
    "success"
            );

        }
    );

}


// =====================================================
// PASSWORD SHOW / HIDE — LOGIN
// =====================================================

const toggleLoginPassword =
    document.getElementById(
        "toggleLoginPassword"
    );

const loginPassword =
    document.getElementById(
        "loginPassword"
    );


if (
    toggleLoginPassword &&
    loginPassword
) {

    toggleLoginPassword.addEventListener(
        "click",
        function () {

            if (
                loginPassword.type ===
                "password"
            ) {

                loginPassword.type = "text";

                toggleLoginPassword.innerHTML =
                    '<i class="fa-regular fa-eye-slash"></i>';

            }

            else {

                loginPassword.type = "password";

                toggleLoginPassword.innerHTML =
                    '<i class="fa-regular fa-eye"></i>';

            }

        }
    );

}


// =====================================================
// PASSWORD SHOW / HIDE — REGISTER
// =====================================================

const toggleRegisterPassword =
    document.getElementById(
        "toggleRegisterPassword"
    );

const registerPassword =
    document.getElementById(
        "registerPassword"
    );


if (
    toggleRegisterPassword &&
    registerPassword
) {

    toggleRegisterPassword.addEventListener(
        "click",
        function () {

            if (
                registerPassword.type ===
                "password"
            ) {

                registerPassword.type = "text";

                toggleRegisterPassword.innerHTML =
                    '<i class="fa-regular fa-eye-slash"></i>';

            }

            else {

                registerPassword.type = "password";

                toggleRegisterPassword.innerHTML =
                    '<i class="fa-regular fa-eye"></i>';

            }

        }
    );

}

// =====================================================
// LOGIN BUTTON STATE
// =====================================================

function updateLoginButton() {

    const loggedIn =
        localStorage.getItem(
            "nexoraLoggedIn"
        );


    let currentUser = null;


    try {

        currentUser =
            JSON.parse(
                localStorage.getItem(
                    "nexoraCurrentUser"
                )
            );

    } catch (error) {

        currentUser = null;

    }


    // =========================================
    // LOGGED IN
    // =========================================

    if (
        loggedIn === "true" &&
        currentUser
    ) {

        // Desktop button
        if (loginBtn) {

            loginBtn.innerHTML = `

                <i class="fa-regular fa-user"></i>

                ${currentUser.name}

            `;

        }


        // Mobile button
        if (mobileLoginBtn) {

            mobileLoginBtn.innerHTML = `

                <i class="fa-regular fa-user mr-2"></i>

                ${currentUser.name}

            `;

        }

        return;

    }


    // =========================================
    // LOGGED OUT
    // =========================================

    if (loginBtn) {

        loginBtn.innerHTML = `

            <i class="fa-regular fa-user"></i>

            Login

        `;

    }


    if (mobileLoginBtn) {

        mobileLoginBtn.innerHTML = `

            <i class="fa-regular fa-user mr-2"></i>

            Login

        `;

    }

}


// =====================================================
// CHECK LOGIN ON PAGE LOAD
// =====================================================

updateLoginButton();

});